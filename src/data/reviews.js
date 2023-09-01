import { v4 as uuidv4 } from 'uuid';

import photo1 from '../assets/images/reviewer1.png';
import photo2 from '../assets/images/reviewer2.png';

export const reviews = [
  [
    {
      name: 'Екатерина Вальнова',
      img: photo1,
      text: 'Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.',
      id: uuidv4(),
    }, {
      name: 'Евгений Стрыкало',
      img: photo2,
      text: 'СМС-сопровождение до посадки. Сразу после оплаты ж / д билетови за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.',
      id: uuidv4(),
    }
  ],
  [
    {
      name: 'Анна Антонова',
      img: photo1,
      text: 'Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.',
      id: uuidv4(),
    }, {
      name: 'Валентина Волева',
      img: photo1,
      text: 'Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.',
      id: uuidv4(),
    }
  ],
  [
    {
      name: 'Григорий Грицаев',
      img: photo2,
      text: 'СМС-сопровождение до посадки. Сразу после оплаты ж / д билетови за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.',
      id: uuidv4(),
    }, {
      name: 'Борис Борисов',
      img: photo2,
      text: 'СМС-сопровождение до посадки. Сразу после оплаты ж / д билетови за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.',
      id: uuidv4(),
    }
  ]
];