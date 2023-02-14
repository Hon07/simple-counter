import React from "react";

const Contador = (props) => {
  const leadingZero = (value) => {
    return value < 10 ? "0" + value : value;
  };

  return (
    <div className="container">
      <div className="calendar">
        <i className="far fa-clock"></i>
      </div>
      <div className="cuarto">
        {leadingZero(Math.floor(props.minute / 60))}
      </div>
      <div className="tercero">{leadingZero(props.minute % 60)}</div>
      <div className="segundo">{leadingZero(props.second % 60)}</div>
      <div className="primero">{leadingZero(Math.floor(props.miliSeconds / 10))}</div>
    </div>
  );
};

export default Contador;
