import Logo from '../ui/Logo';
import MenuNav from '../ui/MenuNav';
import style from './Header.module.css';
import Wrapper from './Wrapper';

export default function Header() {
  return (
    <>
      <div className={style.logo}>
        <Wrapper>
          <Logo />
        </Wrapper>
      </div>
      <MenuNav />
    </>
  );
}