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

# create user
# insert into users table
def create_user(account, password, name, admin, vip):
    # insert statement
    insert_stmt = sqlalchemy.text(
        "INSERT INTO parking_app_db.users (account, password, name, admin, vip) "
        + "VALUES (:account, :password, :name, :admin, :vip)")

    with pool.connect() as db_conn:
        db_conn.execute(
            insert_stmt,
            account=account,
            password=password,
            name=name,
            admin=admin,
            vip=vip
        )