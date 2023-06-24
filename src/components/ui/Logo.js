import { Link } from 'react-router-dom';
import Wrapper from '../blocks/Wrapper';
import style from './Logo.module.css'

export default function Logo() {
  return (
    <div className={style.logo}>
      <Wrapper>
        <Link to="/" className={style.logo__link}>Лого</Link>
      </Wrapper>
    </div>
  );
}