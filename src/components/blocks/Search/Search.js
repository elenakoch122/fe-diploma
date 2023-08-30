import style from './Search.module.css';
import SearchTicketForm from '../../elements/SearchTicketForm/SearchTicketForm';

export default function Search() {
  return (
    <main className={style.search}>
      <div className={style.search__wrapper}>
        <SearchTicketForm page='search'/>
      </div>
    </main>
  );
}