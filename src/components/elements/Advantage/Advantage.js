import style from './Advantage.module.css';

export default function Advantage({ icon, text }) {
  return (
    <>
      <img className={style.icon} src={icon} alt="" />
      <p className={style.text}>{text}</p>
    </>
  );
}