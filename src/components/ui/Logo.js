import { Link } from 'react-router-dom';
import style from './Logo.module.css'

export default function Logo() {
  return (
    <Link to="/" className={style.logo__link}>Лого</Link>
  );
}