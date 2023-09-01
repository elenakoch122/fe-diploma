import { v4 as uuidv4 } from 'uuid';

export const contacts = [
  {
    type: 'phone',
    contact: '8 (800) 000 00 00',
    id: uuidv4(),
  }, {
    type: 'email',
    contact: 'inbox@mail.ru',
    id: uuidv4(),
  }, {
    type: 'skype',
    contact: 'tu.train.tickets',
    id: uuidv4(),
  }, {
    type: 'geolocation',
    contact: `г. Москва
      ул. Московская 27-35
      555 555
    `,
    id: uuidv4(),
  },
];