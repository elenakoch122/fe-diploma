import Advantage from '../../../elements/Advantage/Advantage';
import style from './OrderInstructions.module.css';

import icon1 from '../../../../assets/images/thanks-instructions-1.png';
import icon2 from '../../../../assets/images/thanks-instructions-2.png';
import icon3 from '../../../../assets/images/thanks-instructions-3.png';

import { v4 as uuidv4 } from 'uuid';

export default function OrderInstructions() {
  // выделить advList в отдельный файл с данными
  const instrList = [
    { text: 'билеты будут отправлены на ваш e-mail', icon: icon1 },
    { text: 'распечатайте и сохраняйте билеты до даты поездки', icon: icon2 },
    { text: 'предьявите распечатанные билеты при посадке', icon: icon3 },
  ];

  return (
    <div className={style.orderInstructions}>
      <ul className={style.orderInstructions__list}>
        {instrList.map(i => (
          <li className={style.orderInstructions__item} key={uuidv4()}>
            <Advantage icon={i.icon} text={i.text} />
          </li>
        ))}
      </ul>
    </div>
  );
}