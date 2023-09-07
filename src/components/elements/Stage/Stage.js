import style from './Stage.module.css';

export default function Stage({ number, name, color }) {
  return (
    <div className={style.stage} style={{ backgroundColor: color }}>
      <span className={style.stage__number}>{number}</span>
      {name}
    </div>
  );
}