# https://github.com/GoogleCloudPlatform/cloud-sql-python-connector

from google.cloud.sql.connector import Connector
import sqlalchemy
import pymysql
import pandas as pd
from datetime import datetime

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
            row2 = ""
            s = str(row[2]%100-1)
            if int(row[2]/100) == 0:
                row2 = "A-" + s.zfill(3)
            elif int(row[2]/100) == 1:
                row2 = "B-" + s.zfill(3)
            elif int(row[2]/100) == 2:
                row2 = "C-" + s.zfill(3)
            elif int(row[2]/100) == 3:
                row2 = "D-" + s.zfill(3)
            r.append({
                "id": row[0],
                "user_id": row[1],
                "park_id": row2,
                "license_num": row[3],
                "eff_start_time": datetime.strftime(row[4],'%Y/%m/%d %H:%M'),
                "eff_end_time": datetime.strftime(row[5],'%Y/%m/%d %H:%M')
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
            "eff_start_time": r["eff_start_time"],
            "eff_end_time": r["eff_end_time"]
        })
        
    return result









