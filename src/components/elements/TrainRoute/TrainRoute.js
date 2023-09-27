import style from './TrainRoute.module.css';
import thereIcon from '../../../assets/images/icon_arrow_there.png';
import backIcon from '../../../assets/images/icon_arrow_back.png';

export default function TrainRoute() {
  return (
    <div className={style.route}>
      <div>
        <time className={style.route__time}>00:10</time>
        <p className={style.route__city}>Москва</p>
        <p className={style.route__station}>Курский вокзал</p>
      </div>

      <div>
        <time className={style.route__duration}>9:42</time>
        <img src={thereIcon} alt="" />
      </div>

      <div>
        <time className={style.route__time}>09:52</time>
        <p className={style.route__city}>Санкт-Петербург</p>
        <p className={style.route__station}>Ладожский вокзал</p>
      </div>
    </div>
  );
}