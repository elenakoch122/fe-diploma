import { HashLink } from 'react-router-hash-link';
import style from './Footer.module.css';

import Contacts from './Contacts/Contacts';
import SubscriptionEmail from './SubscriptionEmail/SubscriptionEmail';
import SubscriptionSocials from './SubscriptionSocials/SubscriptionSocials';
import Wrapper from '../../Wrapper';
import Logo from '../../ui/Logo/Logo';

import iconUp from '../../../assets/images/footer-icon-up.png';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__info}>
        <Contacts />

        <div className={style.footer__subscriptions}>
          <SubscriptionEmail />
          <SubscriptionSocials />
        </div>
      </div>

      <Wrapper>
        <div className={style.footer__wrapper}>
          <Logo />
          <HashLink to="#top" title="Перейти наверх страницы"><img src={iconUp} alt="" /></HashLink>
          <span className={style.footer__year}>2018 WEB</span>
        </div>
      </Wrapper>
    </footer>
  );
}