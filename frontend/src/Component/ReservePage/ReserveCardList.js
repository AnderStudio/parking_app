import React from 'react';
import ReserveCard from './ReserveCard';

const CardList = (props) => {
  return (
    <div >
      <div className="d-flex justify-content-center" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {props.cards.map((card, index) => {
          return <ReserveCard
            key={card.id}
            parking_space={card.parking_space}
            license_num={card.license_num}
            eff_start_time={card.eff_start_time}
            eff_end_time={card.eff_end_time}
          />;
        })}
      </div>
    </div>

  );
};

export default CardList;