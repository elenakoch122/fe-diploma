import Seat from '../Seat/Seat';

export default function Lux() {
  let seats = [];
  let width, height, top, left, lineHeight;

  for (let i = 1; i <= 16; i++) {
    width = 27;
    height = 58;
    top = 29;
    lineHeight = 3.6;
    i === 1 ? left = 133 : i % 2 === 0 ? left += 59.5 : left += 30;

    seats.push({ number: i, width, height, top, left, lineHeight });
  }

  return (
    <>
      {seats.map(s => <Seat seat={s} />)}
    </>
  );
}