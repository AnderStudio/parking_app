# https://github.com/GoogleCloudPlatform/cloud-sql-python-connector

from google.cloud.sql.connector import Connector
import sqlalchemy
import pymysql


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
def query_all_parking_spaces():
    r = []
    with pool.connect() as db_conn:
        result = db_conn.execute("SELECT * from parking_app_db.parking_spaces").fetchall()
        
        # Do something with the results
        for row in result:
            r.append({
                "id": row[0],
                "parking_lot": row[1],
                "space_num": row[2],
                "current_license_num": row[3],
                "vip_only": row[4],
                "is_empty": row[5]
            })
    return r