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

# query parking_events table
def query_all_parking_events():
    r = []
    with pool.connect() as db_conn:
        result = db_conn.execute("SELECT * from parking_app_db.parking_events").fetchall()
        
        # Do something with the results
        for row in result:
            row1 = ""
            s = str(row[1]%100-1)
            if int(row[1]/100) == 0:
                row1 = "A-" + s.zfill(3)
            elif int(row[1]/100) == 1:
                row1 = "B-" + s.zfill(3)
            elif int(row[1]/100) == 2:
                row1 = "C-" + s.zfill(3)
            elif int(row[1]/100) == 3:
                row1 = "D-" + s.zfill(3)
                
            r.append({
                "id": row[0],
                "parking_space_id": row1,
                "license_num": row[2],
                "start_time": datetime.strftime(row[3],'%Y/%m/%d %H:%M'),
                "end_time": datetime.strftime(row[4],'%Y/%m/%d %H:%M')
            })
    return r