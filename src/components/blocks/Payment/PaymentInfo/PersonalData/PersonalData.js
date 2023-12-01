import style from './PersonalData.module.css';
import Person from '../../../../elements/Person/Person';

export default function PersonalData() {
  return (
    <div className={style.personalData}>
      <Person />

      <label className="label">
        Контактный телефон
        <input
          className={`input border-928F94-5px ${style.personalData__input}`}
          type="text" placeholder="+7 ___ ___ __ __"/>
      </label>

      <label className="label">
        E-mail
        <input
          className={`input border-928F94-5px ${style.personalData__input}`}
          type="text" placeholder="inbox@gmail.ru" />
      </label>
    </div>
  );
}