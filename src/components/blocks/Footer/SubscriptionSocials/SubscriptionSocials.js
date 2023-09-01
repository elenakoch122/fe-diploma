import { Link } from 'react-router-dom';
import style from './SubscriptionSocials.module.css';

import { socials } from '../../../../data/socials';

export default function SubscriptionSocials() {
  return (
    <div className={style.subSocials}>
      <h2 className="footer__title">Подписывайтесь на нас</h2>

      <ul className={style.subSocials__list}>
        {socials.map(s => (
          <li className={style.subSocials__item} key={s.name}>
            <Link to={s.link} className={style.subSocials__link} title={`Подписаться на ${s.name}`} rel="noopener noreferrer" target='_blank'>
              <img className={style.subSocials__img} src={s.icon} alt={`Подписаться на ${s.name}`} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}