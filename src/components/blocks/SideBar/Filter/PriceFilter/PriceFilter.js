import style from './PriceFilter.module.css';
import { price } from '../../../../../data/filter';
import RangeSlider from '../../../../elements/RangeSlider/RangeSlider';

export default function PriceFilter() {
  return (
    <>
      <h4 className={style.title}>Стоимость</h4>

      <div className={style.captions__wrapper}>
        <span className={style.caption}>от</span>
        <span className={style.caption}>до</span>
      </div>

      <RangeSlider min={price.min} max={price.max} step={price.step}/>
    </>
  );
}