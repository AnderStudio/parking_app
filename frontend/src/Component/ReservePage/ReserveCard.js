import React from 'react';

const ReserveCard = (props) => {
    return (
        // <div classNameName="d-flex flex-row vw-100 justify-content-around">
        //     <div classNameName="card-body">
        //     <h3 classNameName="card-title">Success card title {props.title}</h3>
        //     <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. ${props.description}</p>
        // </div>
        // </div>
        <div className="card text-center">
            <div className="card-header">
                Featured
                <button type="button" class="btn-close" aria-label="Close"></button>
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment {props.title}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content. {props.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>

    );
};

export default ReserveCard;
