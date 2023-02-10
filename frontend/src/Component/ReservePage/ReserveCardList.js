import React from 'react';
import ReserveCard from './ReserveCard';

const CardList = (props) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {props.cards.map((card, index) => {
        return <ReserveCard key={card.id} title={card.id} description={card.user_id} />;
      })}
    </div>
  );
};

export default CardList;