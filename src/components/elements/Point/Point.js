import style from './Point.module.css';

export default function Point({ type, icon, text }) {
  return (
    <>
      <img className={style.icon} src={icon} alt="" />
      <p className={`${style.text} ${style[type]}`}>{text}</p>
    </>
  );
}