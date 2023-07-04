import style from './Footer.module.css';
import Contacts from './blocks/Contacts';
import SubscriptionEmail from './blocks/SubscriptionEmail';
import SubscriptionSocials from './blocks/SubscriptionSocials';
import Wrapper from './blocks/Wrapper';
import Logo from './ui/Logo';
import iconUp from '../assets/images/footer-icon-up.png';
import { Link } from 'react-router-dom';

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
          <Link to="#" title="Перейти наверх страницы"><img src={iconUp} alt="" /></Link>
          <span className={style.footer__year}>2018 WEB</span>
        </div>
      </Wrapper>
    </footer>
  );
}