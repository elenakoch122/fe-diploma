import DateInput from '../../../ui/DateInput/DateInput';
import style from './Filter.module.css';

export default function Filter() {
  return (
    <div className={style.filter}>
      <label>
        Дата поездки
        <DateInput id="dateFrom"/>
      </label>
    </div>
  );
}