import { Link } from 'react-router-dom';
import style from './HowItWorks.module.css';

import Wrapper from '../../Wrapper';
import Point from '../../elements/Point/Point';
import { v4 as uuidv4 } from 'uuid';

import icon1 from '../../../assets/images/advantage-icon1.png';
import icon2 from '../../../assets/images/advantage-icon2.png';
import icon3 from '../../../assets/images/advantage-icon3.png';

export default function HowItWorks() {
  // выделить advList в отдельный файл с данными
  const advList = [
    { text: 'Удобный заказ на сайте', icon: icon1 },
    { text: 'Нет необходимости ехать в офис', icon: icon2 },
    { text: 'Огромный выбор направлений', icon: icon3 },
  ];

  return (
    <section className={style.howItWorks} id='how-it-works'>
      <Wrapper>
        <div className={style.howItWorks__wrapper}>
          <h1 className={style.howItWorks__title}>Как это работает</h1>
          <Link className={style.howItWorks__link}>Узнать больше</Link>
        </div>

        <ul className={style.howItWorks__list}>
          {advList.map(a => (
            <li className={style.howItWorks__item} key={uuidv4()}>
              <Point type="advantage" icon={a.icon} text={a.text} />
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}