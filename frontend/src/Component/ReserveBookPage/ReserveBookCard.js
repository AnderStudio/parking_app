import React, { useState } from 'react';

const ReserveBookCard = (props) => {
    return (
        <div className="mx-3 my-3">
            <div className="card text-center">
                <div className="card-header d-flex justify-content-between">
                    {props.parking_space}
                </div>
                <div className="card-body">
                    <h5 className="card-title">車號：{props.license_num}</h5>
                    <p className="card-text fs-6 fw-light text-black-50 mb-0">預計自</p>
                    <p className="card-text fs-5">{props.eff_start_time}</p>
                    <p className="card-text fs-6 fw-light text-black-50 mb-0">停放至</p>
                    <p className="card-text fs-5">{props.eff_end_time}</p>
                </div>
            </div>
        </div>
    );
};

export default ReserveBookCard;
