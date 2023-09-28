import style from './Button.module.css'

export default function Button({ text, color, type, callback }) {
  return (
    <button
      className={`${style.common} ${style[color]} ${style[type]}`}
      onClick={callback}
    >
      {text}
    </button>
  );
}