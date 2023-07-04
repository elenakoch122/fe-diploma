import style from './Advantage.module.css';

export default function Advantage({ url, text }) {
  return (
    <>
      <img className={style.icon} src={url} alt="" />
      <p className={style.text}>{text}</p>
    </>
  );
}