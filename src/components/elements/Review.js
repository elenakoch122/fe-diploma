import style from './Review.module.css';

export default function Review({ reviewer, text, img }) {
  return (
    <div className={style.review}>
      <img className={style.review__img} src={img} alt="" />

      <div className={style.review__wrapper}>
        <h2 className={style.review__reviewer}>{reviewer}</h2>
        <blockquote className={style.review__text}>
          {text}
          <span className={style.review__text__span}></span>
        </blockquote>
      </div>
    </div>
  );
}