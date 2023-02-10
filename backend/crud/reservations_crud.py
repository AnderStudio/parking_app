# https://github.com/GoogleCloudPlatform/cloud-sql-python-connector

from google.cloud.sql.connector import Connector
import sqlalchemy
import pymysql
import pandas as pd

# initialize Connector object
connector = Connector()

# function to return the database connection
def getconn() -> pymysql.connections.Connection:
    conn: pymysql.connections.Connection = connector.connect(
        "tsmchack2023-bsid-grp3:asia-east1:tsmchack2023-bsid-mysql-db",
        "pymysql",
        user="root",
        password="b92dXKDT",
        db="parking_app_db"
    )
    return conn

# create connection pool
pool = sqlalchemy.create_engine(
    "mysql+pymysql://",
    creator=getconn,
)

# query parking_space table
def query_all_reservations():
    r = []
    with pool.connect() as db_conn:
        result = db_conn.execute("SELECT * from parking_app_db.reservations").fetchall()

        # Do something with the results
        for row in result:
            r.append({
                "id": row[0],
                "user_id": row[1],
                "park_id": row[2],
                "license_num": row[3],
                "eff_start_time": row[4],
                "eff_end_time": row[5]
            })
    return r

def get_reservation_by_userid(userid):

    res = query_all_reservations()
    reservation_df = pd.DataFrame.from_records(res)

    reservation = reservation_df.loc[(reservation_df["user_id"] == int(userid))]

    result = []
    for index, r in reservation.iterrows():
        result.append({
            "id": r["id"],
            "user_id": r["user_id"],
            "park_id": r["park_id"],
            "license_num": r["license_num"],
            "eff_start_time": str(r["eff_start_time"]),
            "eff_end_time": str(r["eff_end_time"])
        })
    return result