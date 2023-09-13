import DateInput from '../../../../ui/DateInput/DateInput';
import style from './DateFilter.module.css';

export default function DateFilter() {
  return (
    <>
      <label className={style.label} htmlFor="dateFrom">Дата поездки</label>
      <DateInput id="dateFrom" />

      <label className={style.label} htmlFor="dateTo">Дата возвращения</label>
      <DateInput id="dateTo" />
    </>
  );
}