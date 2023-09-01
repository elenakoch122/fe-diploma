import { HashLink } from 'react-router-hash-link';
import style from './MenuNav.module.css';

import Wrapper from '../../Wrapper';
import { menu } from '../../../data/menu';

export default function MenuNav() {
  // выделить активную ссылку меню другим цветом: при клике на ссылку у всех убирать класс "active", добавлять класс "active" нужной ссылке
  // const onClick = (e) => console.dir(e.target);
  const headerHeight = 156; /* высота Header (логотип + меню) */

  return (
    <nav className={style.nav}>
      <Wrapper>
        <ul className={style.nav__list}>
          {menu.map(m => (
            <li className={style.nav__item} key={m.id}>
              <HashLink
                to={m.url}
                className={style.nav__link}
                scroll={(el) => window.scroll(0, el.offsetTop - headerHeight)}
                // onClick={onClick}
              >
                {m.text}
              </HashLink>
            </li>
          ))}
        </ul>
      </Wrapper>
    </nav>
  );
}