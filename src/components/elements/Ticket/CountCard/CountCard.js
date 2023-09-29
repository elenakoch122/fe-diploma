import style from './CountCard.module.css';

export default function CountCard({ passenger }) {
  let type, caption;

  switch (passenger) {
    case 'adult':
      type = 'Взрослых';
      caption = 'Можно добавить еще 3 пассажиров';
      break;
    case 'children':
      type = 'Детских';
      caption = 'Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%';
      break;
    default:
      type = 'Детских «без места»';
      caption = '';
  }

  return (
    <div className={style.card}>
      <select className={style.card__select} name="" id="">
        <option value="0">{type} — 0</option>
        <option value="1">{type} — 1</option>
        <option value="2">{type} — 2</option>
        <option value="3">{type} — 3</option>
        <option value="4">{type} — 4</option>
      </select>

      <p className={style.card__tooltip}>{caption}</p>
    </div>
  );
}