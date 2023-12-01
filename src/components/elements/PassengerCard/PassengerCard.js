import { useState } from 'react';
import style from './PassengerCard.module.css';

import Button from '../../ui/Button/Button';
import PassengerCardDocument from './PassengerCardDocument/PassengerCardDocument';
import Person from '../Person/Person';

export default function PassengerCard() {
  const [collapseClasses, setCollapseClasses] = useState(`${style.collapse} ${style.collapse_grey}`);
  const [collapse, setCollapse] = useState('—');
  const [cardType, setCardType] = useState('child');

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
    <details className={style.card} open>
      <summary className={style.card__header}>
        <span className={collapseClasses} onClick={onClick}>{collapse}</span>
        <h2 className={style.card__header__title}>Пассажир 1</h2>
      </summary>

      <div className={style.card__info}>
        <select
          className={`${style.card__info__select} border-928F94-5px`}
          value={cardType}
          onChange={(e) => setCardType(e.target.selectedOptions[0].value)}
        >
          <option value="adult">Взрослый</option>
          <option value="child">Детский</option>
        </select>

        <Person />

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

      {cardType === 'adult' ? <PassengerCardDocument type="passport" /> : <PassengerCardDocument type="birth-certificate" />}

      <div className={style.card__validation}>
        <Button
          text="Следующий пассажир"
          color="white"
          type="checkPassenger"
          // callback={}
        />
      </div>
    </details>
  );
}