import { Link } from 'react-router-dom';
import style from './MenuNav.module.css';

import Wrapper from '../../Wrapper';

export default function MenuNav() {
  return (
    <div className={style.nav}>
      <Wrapper>
        <ul className={style.nav__list}>
          <li className={style.nav__item}><Link to="/about" className={style.nav__link}>О нас</Link></li>
          <li className={style.nav__item}><Link to="/instruction" className={style.nav__link}>Как это работает</Link></li>
          <li className={style.nav__item}><Link to="/reviews" className={style.nav__link}>Отзывы</Link></li>
          <li className={style.nav__item}><Link to="/contacts" className={style.nav__link}>Контакты</Link></li>
        </ul>
      </Wrapper>
    </div>
  );
}