import Header from '../components/blocks/Header';
import SearchTicketForm from '../components/elements/SearchTicketForm';
import style from './MainPage.module.css'

export default function MainPage() {
  return (
    <main className={style.main}>
      <Header />
      <div className={style.main__content}>
        <p className={style.main__contentTagline}>Вся жизнь - <em>путешествие!</em></p>
        <SearchTicketForm />
      </div>
    </main>
  );
}