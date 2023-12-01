import style from './Person.module.css';

export default function Person() {
  return (
    <div className={style.person}>
      <label className="label">
        Фамилия
        <input className="input border-928F94-5px" type="text" />
      </label>

      <label className="label">
        Имя
        <input className="input border-928F94-5px" type="text" />
      </label>

      <label className="label">
        Отчество
        <input className="input border-928F94-5px" type="text" />
      </label>
    </div>
  );
}