import Seat from '../Seat/Seat';

export default function Reserved() {
  let seats = [];
  let width, height, top, left, lineHeight;

  const seatsLeft = [5, 9, 13, 17, 21, 25, 29];
  const seatsRight = [3, 7, 11, 15, 19, 23, 27, 31];

  for (let i = 1; i <= 48; i++) {
    if (i <= 32) {
      width = 27;
      height = 31;
      lineHeight = 1.9;
      i % 2 === 0 ? top = 29 : top = 60;

      if (i === 1 || i === 2) left = 133;
      if (seatsRight.some(num => num === i)) left += 59.5;
      if (seatsLeft.some(num => num === i)) left += 30;
    }

    if (i >= 33) {
      width = 43;
      height = 24;
      top = 113;
      lineHeight = 1.5;
      i === 33 ? left = 133 : i % 2 === 0 ? left += 43.5 : left += 46;
    }

    seats.push({ number: i, width, height, top, left, lineHeight });
  }

  return (
    <>
      {seats.map(s => <Seat seat={s} />)}
    </>
  );
}