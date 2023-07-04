import style from './Main.module.css';
import Header from './blocks/Header';
import SearchTicketForm from './elements/SearchTicketForm';

export default function Main() {
  return (
    <main className={style.main} id='main'>
      <Header />
      <div className={style.main__content}>
        <p className={style.main__contentTagline}>Вся жизнь - <em>путешествие!</em></p>
        <SearchTicketForm />
      </div>
    </main>
  );
}