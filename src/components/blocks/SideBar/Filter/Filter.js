import style from './Filter.module.css';
import DateFilter from './DateFilter/DateFilter';
import OptionsFilter from './OptionsFilter/OptionsFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import TimeFilter from './TimeFilter/TimeFilter';

export default function Filter() {
  return (
    <div className={style.filter}>
      <div className={style.filter__block}><DateFilter /></div>
      <div className={style.filter__block}><OptionsFilter /></div>
      <div className={style.filter__block}><PriceFilter /></div>
      <div className={style.filter__block}><TimeFilter title='Туда' /></div>
      <div className={style.filter__block}><TimeFilter title='Обратно' /></div>
    </div>
  );
}