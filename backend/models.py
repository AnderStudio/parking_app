from typing import Optional
from pydantic import BaseModel


class Parking(BaseModel):
    floor: str
    zone: str
    parking_number: str
    license_plate: Optional[str] = None
    is_available: Optional[bool] = None


class Reservation(BaseModel):
    user_id: str
    parking_lot: str
    license_num: str
    eff_start_time: str
    eff_end_time: str