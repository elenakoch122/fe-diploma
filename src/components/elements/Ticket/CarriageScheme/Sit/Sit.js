import Seat from '../Seat/Seat';
import style from './Sit.module.css';

export default function Sit() {
  const seats = [
    { number: 1, left: '144px' },
    { number: 2, left: '144px' },
    { number: 3, left: '189px' },
    { number: 4, left: '189px' },
    { number: 5, left: '233px' },
    { number: 6, left: '233px' },
    { number: 7, left: '277px' },
    { number: 8, left: '277px' },
    { number: 9, left: '321px' },
    { number: 10, left: '321px' },

    { number: 11, left: '321px' },
    { number: 12, left: '321px' },
    { number: 13, left: '321px' },
    { number: 14, left: '321px' },
    { number: 15, left: '321px' },
    { number: 16, left: '321px' },
    { number: 17, left: '321px' },
    { number: 18, left: '321px' },
    { number: 19, left: '321px' },
    { number: 20, left: '321px' },
    { number: 21, left: '321px' },
    { number: 22, left: '321px' },
    { number: 23, left: '321px' },
    { number: 24, left: '321px' },
    { number: 25, left: '321px' },
    { number: 26, left: '321px' },
    { number: 27, left: '321px' },
    { number: 28, left: '321px' },
    { number: 29, left: '321px' },
    { number: 30, left: '321px' },
    { number: 31, left: '321px' },
    { number: 32, left: '321px' },
    { number: 33, left: '321px' },
    { number: 34, left: '321px' },
    { number: 35, left: '321px' },
    { number: 36, left: '321px' },
    { number: 37, left: '321px' },
    { number: 38, left: '321px' },
    { number: 39, left: '321px' },
    { number: 40, left: '321px' },
    { number: 41, left: '321px' },
    { number: 42, left: '321px' },
    { number: 43, left: '321px' },
    { number: 44, left: '321px' },
    { number: 45, left: '321px' },
    { number: 46, left: '321px' },
    { number: 47, left: '321px' },
    { number: 48, left: '321px' },
    { number: 49, left: '321px' },
    { number: 50, left: '321px' },
    { number: 51, left: '321px' },
    { number: 52, left: '321px' },
    { number: 53, left: '321px' },
    { number: 54, left: '321px' },
    { number: 55, left: '321px' },
    { number: 56, left: '321px' },
    { number: 57, left: '321px' },
    { number: 58, left: '321px' },
    { number: 59, left: '321px' },
    { number: 60, left: '321px' },
    { number: 61, left: '321px' },
    { number: 62, left: '321px' },
  ];

  return (
    <>
      {seats.map(s => <Seat type='sit' seat={s} />)}
    </>
  );
}