import Seat from '../Seat/Seat';

export default function Sit() {
  let seats = [];
  const width = 27;
  const height = 19;
  let left = 145;
  let top;

  for (let i = 1; i <= 62; i++) {
    if (i === 1) top = 54;
    if (i === 2) top = 32;

    if (i >= 3 && i <= 32) {
      if (i % 2 !== 0) {
        top = 54;
        left += 44;
      } else {
        top = 32;
      }
    }

    if (i === 33) {
      top = 114;
      left = 145;
    }

    if (i >= 34 && i <= 61) {
      if (i % 2 === 0) {
        top = 92;
        left += 44;
      } else {
        top = 114;
      }
    }

    if (i === 62) {
      top = 114;
      left += 44;
    }

    seats.push({ number: i, width, height, top, left });
  }

  return (
    <>
      {seats.map(s => <Seat seat={s} />)}
    </>
  );
}