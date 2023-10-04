import { useState } from 'react';
import style from './Seat.module.css';

export default function Seat({ seat }) {
  const initClasses = `${style.common} ${style.enable}`;
  const [classes, setClasses] = useState(initClasses);

  const onSeatClick = (e) => {
    const isActive = e.target.className.includes('active');
    const isDisable = e.target.className.includes('disable');

    if (isDisable) return;

    !isActive ? setClasses(initClasses + ' ' + style.active) : setClasses(initClasses);
  };

  return (
    <div
      className={classes}
      style={{
        width: `${seat.width}px`,
        height: `${seat.height}px`,
        top: `${seat.top}px`,
        left: `${seat.left}px`,
        lineHeight: seat.lineHeight || 'normal',
      }}
      onClick={onSeatClick}
    >
      {seat.number}
    </div>
  );
}