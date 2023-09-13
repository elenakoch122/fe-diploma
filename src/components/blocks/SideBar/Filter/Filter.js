import style from './Filter.module.css';
import DateFilter from './DateFilter/DateFilter';
import OptionsFilter from './OptionsFilter/OptionsFilter';
import PriceFilter from './PriceFilter/PriceFilter';

export default function Filter() {
  return (
    <div className={style.filter}>
      <div className={style.filter__block}><DateFilter /></div>
      <div className={style.filter__block}><OptionsFilter /></div>
      <div className={style.filter__block}><PriceFilter /></div>
    </div>
  );
}