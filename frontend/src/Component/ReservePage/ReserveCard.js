import React, { useState } from 'react';

const ReserveCard = (props) => {
    const [data, setData] = useState(null);
    const handleDeleteClick = () => {
        fetch(`/delete_reservation/${props.id}`)
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error(error));
        console.log(data);
        window.location.reload();
      };

    return (
        <div className="mx-3 my-3">
            <div className="card text-center">
                <div className="card-header d-flex justify-content-between">
                    車位：{props.parking_space}
                    <button onClick={handleDeleteClick} type="button" className="btn-close float-end" aria-label="Close"></button>
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

export default ReserveCard;
