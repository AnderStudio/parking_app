

# to get the identity of a user
def get_user_account():
    _get(){
        id,
        name,
        admin,
        vip
    }
#"proxy": "http://127.0.0.1:5000/",
#base
def get_user_list():
    _get(){
        user
    }

# to get the state of a parking lot
def get_parking_lot()

# base
# to get the parking_lot_list
def get_parking_spaces():
    _get(){
        parking_spaces
    }
    
# to get one specific parking event
def get_parking_event(parking_space_id or license_num):
    _get(){
        id,
        parking_space_id,
        license_num,
        start_time,
        end_time
    }
    
# base
# to get all parking events on the specific parking lot
def get_parking_lot_record():
    _get(){
        parking_events, # use get_parking_event
    }


# to get a reservation of a parking lot
def get_reservation_of_parking_lot(park_id, user_id):
    _get(){
        id,
        user_id,
        park_id,
        license_num,
        eff_start_time,
        eff_end_time
    }
    
# base
# to get all reservations
def get_reservation_list():
    for(){
        _get(){
            reservations
        }
    }


# to get an entry record
def get_entry_record(license_num):
    _get(){
        id,
        license_num,
        enter_time,
        exit_time
    }
    
# base
# to get entry_record list
def get_entry_record_list():
    _get(){
        entry_records
    }
    
# to get a row in the blacklist??
def get_black_id(license_num):
    _get(){
        id,
        license_num,
        block_start_time,
        block_end_time,
        reason
    }
    
# base
# to get the blacklist
def get_blacklist():
    _get(){
        blacklist
    }