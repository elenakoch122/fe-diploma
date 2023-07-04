import { Link } from 'react-router-dom';
import style from './Advantages.module.css';
import Wrapper from './blocks/Wrapper';
import Advantage from './elements/Advantage';
import icon1 from '../assets/images/advantage-icon1.png';
import icon2 from '../assets/images/advantage-icon2.png';
import icon3 from '../assets/images/advantage-icon3.png';

export default function Advantages() {
  return (
    <section className={style.advantages}>
      <Wrapper>
        <div className={style.advantages__wrapper}>
          <h1 className={style.advantages__title}>Как это работает</h1>
          <Link className={style.advantages__link}>Узнать больше</Link>
        </div>

        <ul className={style.advantages__list}>
          <li className={style.advantages__item}>
            <Advantage url={icon1} text="Удобный заказ на сайте" />
          </li>

          <li className={style.advantages__item}>
            <Advantage url={icon2} text="Нет необходимости ехать в офис" />
          </li>

          <li className={style.advantages__item}>
            <Advantage url={icon3} text="Огромный выбор направлений" />
          </li>
        </ul>
      </Wrapper>
    </section>
  );
}
