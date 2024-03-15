import { useSelector } from 'react-redux';
import Star from '../../elements/Star/Star';
import style from './RatingBar.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function RatingBar() {
  const { stars, rating } = useSelector(state => state.rating);

  return (
    <ul className={style.list}>
      {Array(stars).fill().map((i, idx) => {
        let isFilled = false;

        if (idx <= rating - 1) isFilled = true;

        return (
          <li className={style.item} key={uuidv4()}>
            <Star isFilled={isFilled} serial={idx + 1} />
          </li>
        );
      })}
    </ul>
  );
}