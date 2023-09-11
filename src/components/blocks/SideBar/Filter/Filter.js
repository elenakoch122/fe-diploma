import DateInput from '../../../ui/DateInput/DateInput';
import style from './Filter.module.css';
import { options } from '../../../../data/filterOptions';
import FilterOption from '../../../elements/FilterOption/FilterOption';

export default function Filter() {
  return (
    <div className={style.filter}>
      <div className={style.filter__block}>
        <label className={style.filter__label} htmlFor="dateFrom">Дата поездки</label>
        <DateInput id="dateFrom"/>

        <label className={style.filter__label} htmlFor="dateTo">Дата возвращения</label>
        <DateInput id="dateTo" />
      </div>

      <div className={style.filter__block}>
        {options.map(o => <FilterOption option={o}/>)}
      </div>
    </div>
  );
}