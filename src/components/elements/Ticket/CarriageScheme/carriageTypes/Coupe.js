import Seat from '../Seat/Seat';

export default function Coupe() {
  let seats = [];
  let width, height, top, left, lineHeight;

  const seatsLeft = [5, 9, 13, 17, 21, 25, 29];
  const seatsRight = [3, 7, 11, 15, 19, 23, 27, 31];

  for (let i = 1; i <= 32; i++) {
    width = 27;
    height = 29;
    lineHeight = 1.9;
    i % 2 === 0 ? top = 29 : top = 58;

    if (i === 1 || i === 2) left = 133;
    if (seatsRight.some(num => num === i)) left += 59.5;
    if (seatsLeft.some(num => num === i)) left += 30;

    seats.push({ number: i, width, height, top, left, lineHeight });
  }

  return (
    <>
      {seats.map(s => <Seat seat={s} />)}
    </>
  );
}