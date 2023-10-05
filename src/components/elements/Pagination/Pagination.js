import style from './Pagination.module.css';
import { pagination } from '../../../data/icons';

export default function Pagination() {
  return (
    <div className={style.pagination}>
      <div className={`${style.pagination__block} ${style.start}`}>
        {pagination.arrowLeft}
      </div>
      <div className={`${style.pagination__block} ${style.page}`}>1</div>
      <div className={`${style.pagination__block} ${style.page}`}>2</div>
      <div className={`${style.pagination__block} ${style.page}`}>3</div>
      <div className={`${style.pagination__block} ${style.page}`}>...</div>
      <div className={`${style.pagination__block} ${style.end}`}>
        {pagination.arrowRight}
      </div>
    </div>
  );
}