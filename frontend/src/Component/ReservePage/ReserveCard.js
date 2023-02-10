import React from 'react';

const ReserveCard = (props) => {
  return (
    <div style={{ width: '300px', height: '200px', backgroundColor: 'lightgray', margin: '10px' }}>
      <h3>{props.id}</h3>
      <p>{props.user_id}</p>
    </div>
  );
};

export default ReserveCard;
