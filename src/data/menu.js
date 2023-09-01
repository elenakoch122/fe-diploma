import { v4 as uuidv4 } from 'uuid';

export const menu = [
  {
    url: '/#about',
    text: 'О нас',
    id: uuidv4(),
  }, {
    url: '/#how-it-works',
    text: 'Как это работает',
    id: uuidv4(),
  }, {
    url: '/#reviews',
    text: 'Отзывы',
    id: uuidv4(),
  }, {
    url: '/#contacts',
    text: 'Контакты',
    id: uuidv4(),
  }
];