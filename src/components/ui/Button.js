import style from './Button.module.css'

export default function Button({ text, callback, type }) {
  return (
    <button className={style[type]} onClick={callback}>{text}</button>
  );
}