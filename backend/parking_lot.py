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

def query_A_spaces():
    r = []
    with pool.connect() as db_conn:
        result = db_conn.execute("SELECT * from parking_app_db.parking_spaces WHERE parking_lot = 'A'").fetchall()
        
        # Do something with the results
        for row in result:
            r.append({
                "id": row[0],
                #"parking_lot": row[1],
                #"space_num": row[2],
                #"current_license_num": row[3],
                #"vip_only": row[4],
                "is_empty": row[5]
            })
            
    return {"A": r}



def get_remain_parking_spaces():
    
    res = query_all_parking_spaces()
    parking_lot_df = pd.DataFrame.from_records(res)

    remain_A_spaces = len(parking_lot_df.loc[(parking_lot_df["parking_lot"] == "A") & (parking_lot_df["is_empty"] == True)])
    remain_B_spaces = len(parking_lot_df.loc[(parking_lot_df["parking_lot"] == "B") & (parking_lot_df["is_empty"] == True)])
    remain_C_spaces = len(parking_lot_df.loc[(parking_lot_df["parking_lot"] == "C") & (parking_lot_df["is_empty"] == True)])
    remain_D_spaces = len(parking_lot_df.loc[(parking_lot_df["parking_lot"] == "D") & (parking_lot_df["is_empty"] == True)])
    parking_lot_list = {"A": remain_A_spaces, "B": remain_B_spaces, "C": remain_C_spaces, "D": remain_D_spaces}

    return parking_lot_list