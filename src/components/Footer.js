import style from './Footer.module.css';
import Wrapper from './blocks/Wrapper';
import Logo from './ui/Logo';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__info}>
        Hiiiiiii
      </div>
      <Wrapper>
        <Logo />
      </Wrapper>
    </footer>
  );
}