import style from './Main.module.css';
import SearchTicketForm from '../../elements/SearchTicketForm/SearchTicketForm';

export default function Main() {
  return (
    <main className={style.main} id='main'>
      <div className={style.main__content}>
        <p className={style.main__contentTagline}>Вся жизнь - <em>путешествие!</em></p>
        <SearchTicketForm page='main' />
      </div>
    </main>
  );
}