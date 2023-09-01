import style from './Review.module.css';

export default function Review({ review }) {
  return (
    <div className={style.review}>
      <img className={style.review__img} src={review.img} alt="" />

      <div className={style.review__wrapper}>
        <h2 className={style.review__reviewer}>{review.name}</h2>

        <blockquote className={style.review__text}>
          {review.text}
          <span className={style.review__text__span}></span>
        </blockquote>
      </div>
    </div>
  );
}