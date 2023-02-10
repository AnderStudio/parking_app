import os

from fastapi import FastAPI

from google.cloud import storage
from google.cloud import vision
from models import Parking
from orm import query_all_parking, insert_parking
from parking_lot import *
from reservation import *
from parking_events import *
from controller.ReservationPage import *

import json

app = FastAPI()

path = str(os.getcwd())
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = f'{path}/credential.json'
storage_client = storage.Client()

# Route for seeing a data
@app.get('/data')
def get_time():
	# Returning an api for showing in reactjs
    r = {
		'Name':"apple",
		"Age":"22222222222222",
		"Date":"kokwodwodkwokd",
		"programming":"python"
	}
    return r

@app.get("/")
def hellp_world():
    return {"Hello": "World"}

@app.get("/buckets/{bucket}/blobs")
def list_blobs_by_bucket(bucket):
    """Lists all the blobs in the bucket."""
    blobs = storage_client.list_blobs(bucket)
    return [blob.name for blob in blobs]

@app.get("/buckets/{bucket}/{blob}")
def download_blob_from_bucket(bucket, blob):
    bucket = storage_client.get_bucket(bucket)
    blob = bucket.blob(blob)
    blob.download_to_filename(f"/your/download/path/{blob}")
    return {"download": "success"}

@app.get("/vision/{bucket}/{folder}/{file}")
def get_vision(bucket: str, folder: str, file: str):
    image_uri = f"gs://{bucket}/{folder}/{file}"
    client = vision.ImageAnnotatorClient()
    image = vision.Image()
    image.source.image_uri = image_uri
    response = client.text_detection(image=image)
    r = response.text_annotations[0].description
    return {"vision_result": r}

@app.get("/parking")
def query_parking():
    return query_all_parking()

@app.post("/parking")
def create_parking(parking_info: Parking):
    insert_parking(
        parking_info.floor,
        parking_info.zone,
        parking_info.parking_number,
        parking_info.license_plate
    )
    return {"result": "success"}

# run server
# uvicorn main:app --reload --host 127.0.0.1 --port 8000


# parking lot
@app.get("/parking_spaces")
def query_parking_spaces():
    return query_all_parking_spaces()

@app.get("/A_parking_spaces")
def query_A_parking_spaces():
    return query_A_spaces()

@app.get("/B_parking_spaces")
def query_B_parking_spaces():
    return query_B_spaces()

@app.get("/C_parking_spaces")
def query_C_parking_spaces():
    return query_C_spaces()

@app.get("/D_parking_spaces")
def query_D_parking_spaces():
    return query_D_spaces()

@app.get("/parking_remain_spaces")
def query_remain_spaces():
    return get_remain_parking_spaces()

# find my car
@app.get("/my_car_parking_space/{target}")
def query_my_car_parking_spaces(target):
    return get_my_car_parking_space(target)

# reservations
@app.get("/reservation/{userid}")
def query_reservation(userid: str):
    return get_reservation_by_userid(userid)

# parking events
@app.get("/parking_events")
def query_remain_spaces():
    return query_all_parking_events()
# @app.get("/reservation/{userid}")
# def query_reservation(userid: str):
#     return get_reservation_by_userid(userid)

@app.get("/reservation/{userid}")
def query_reservation(userid: str):
    return get_parking_lot_reservation(userid)

@app.get("/insert_reservation/{user_id}/{park_id}/{license_num}/{eff_start_time}/{eff_end_time}")
def query_insert_reservations(user_id, park_id, license_num, eff_start_time, eff_end_time):
    return insert_reservations(user_id, park_id, license_num, eff_start_time, eff_end_time)

@app.get("/delete_reservation/{id}")
def query_delete_reservations(id):
    return delete_reservations(id)
