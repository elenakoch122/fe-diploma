import style from './CheckData.module.css';

export default function CheckData({ title, children }) {
  return (
    <div className={style.checkData}>
      <h2 className={style.checkData__title}>{title}</h2>
      {children}
    </div>
  );
}