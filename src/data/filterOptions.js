import { v4 as uuidv4 } from 'uuid';

import coupe from '../assets/images/filter-icon-coupe.png';
import platzkart from '../assets/images/filter-icon-platzkart.png';
import seat from '../assets/images/filter-icon-seat.png';
import lux from '../assets/images/filter-icon-lux.png';
import wifi from '../assets/images/filter-icon-wifi.png';
import express from '../assets/images/filter-icon-express.png';

export const options = [
  {
    name: 'Купе',
    url: coupe,
    id: uuidv4(),
  }, {
    name: 'Плацкарт',
    url: platzkart,
    id: uuidv4(),
  }, {
    name: 'Сидячий',
    url: seat,
    id: uuidv4(),
  }, {
    name: 'Люкс',
    url: lux,
    id: uuidv4(),
  }, {
    name: 'Wi-Fi',
    url: wifi,
    id: uuidv4(),
  }, {
    name: 'Экспресс',
    url: express,
    id: uuidv4(),
  }
];