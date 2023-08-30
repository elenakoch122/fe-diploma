import style from './Header.module.css';

import Wrapper from '../../Wrapper';
import Logo from '../../ui/Logo/Logo';
import MenuNav from '../../ui/MenuNav/MenuNav';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__logo}>
        <Wrapper>
          <Logo />
        </Wrapper>
      </div>
      <MenuNav />
    </header>
  );
}