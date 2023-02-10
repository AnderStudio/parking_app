from crud.reservations_crud import *

def get_parking_lot_reservation(user_id):
    return get_reservation_by_userid(user_id)