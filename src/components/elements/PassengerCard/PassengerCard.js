import { useState } from 'react';
import style from './PassengerCard.module.css';
import Button from '../../ui/Button/Button';

export default function PassengerCard() {
  const [collapseClasses, setCollapseClasses] = useState(`${style.collapse} ${style.collapse_orange}`);
  const [collapse, setCollapse] = useState('+');

  const onClick = () => {
    setCollapse(prev => prev === '+' ? (
      setCollapseClasses(`${style.collapse} ${style.collapse_grey}`),
      '—'
    ) : (
      setCollapseClasses(`${style.collapse} ${style.collapse_orange}`),
      '+'
    ));
  };

  return (
    <details className={style.card}>
      <summary className={style.card__header}>
        <span className={collapseClasses} onClick={onClick}>{collapse}</span>
        <h2 className={style.card__header__title}>Пассажир 1</h2>
      </summary>

      <div className={style.card__info}>
        <select className={`${style.card__info__select} border-928F94-5px`} name="" id="">
          <option value="adult">Взрослый</option>
          <option value="child">Детский</option>
        </select>

        <div className={style.card__info__name}>
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

        <div className={style.card__info__identification}>
          <label className="label">
            Пол
            <div className={style.card__info__identification__radioWrapper}>
              <div>
                <input className={`${style.radioMan} input`} type="radio" name="sex" id="man" checked />
                <label className={style.man} htmlFor="man"></label>
              </div>

              <div>
                <input className={`${style.radioWoman} input`} type="radio" name="sex" id="woman" />
                <label className={style.woman} htmlFor="woman"></label>
              </div>
            </div>
          </label>

          <label className="label">
            Дата рождения
            <input className="input border-928F94-5px" type="text" placeholder='дд/мм/гггг' />
          </label>
        </div>

        <div className={style.card__info__limitedMobility}>
          <input className={`${style.checkbox} border-928F94-5px`} type="checkbox" name="" id="limited-mobility" />
          <label className={style.checkboxLabel} htmlFor="limited-mobility">ограниченная подвижность</label>
        </div>
      </div>

      <div className={style.card__document}>
        <label className="label">
          Тип документа
          <select className={`${style.card__document__select} border-928F94-5px`} name="" id="">
            <option value="passport">Паспорт РФ</option>
            <option value="birth-certificate">Свидетельство о рождении</option>
          </select>
        </label>

        <label className="label">
          Серия
          <input className="input border-928F94-5px" type="text" placeholder="_ _ _ _" />
        </label>

        <label className="label">
          Номер
          <input className="input border-928F94-5px" type="text" placeholder="_ _ _ _ _ _" />
        </label>
      </div>

      <div className={style.card__validation}>
        <Button
          text="Следующий пассажир"
          color="white"
          type="checkPassenger"
        />
      </div>
    </details>
  );
}