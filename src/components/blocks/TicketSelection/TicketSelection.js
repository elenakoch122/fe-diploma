import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './TicketSelection.module.css';

import TicketCard from "../../elements/TicketCard/TicketCard";
import Pagination from "../../elements/Pagination/Pagination";
import { setSort, setViewLimit } from "../../../slices/filter";
import { setColor } from "../../../slices/stages";

export default function TicketSelection() {
  document.title = 'Выбор поезда';
  const dispatch = useDispatch();

  const limits = useSelector(state => state.filter.limits);
  const sort = useSelector(state => state.filter.sort);

  const onViewClick = (e) => dispatch(setViewLimit(+e.target.textContent));
  const onSortChange = (e) => dispatch(setSort(e.target.value));

  useEffect(() => {
    dispatch(setColor(1));
  }, [dispatch]);

  return (
    <section className={style.ticketSelection}>
      <div className={style.ticketSelection__header}>
        <div className={style.ticketSelection__found}>найдено 20</div>

        <div className={style.ticketSelection__installations}>
          <label className={style.installations__label} htmlFor="sort">сортировать по:</label>
          <select
            className={style.installations__select}
            id="sort"
            value={sort}
            onChange={onSortChange}
          >
            <option className={style.installations__option} value="time">времени</option>
            <option className={style.installations__option} value="cost">стоимости</option>
            <option className={style.installations__option} value="days">длительности</option>
          </select>

          <div className={style.installations__view}>показывать по:</div>
          <ul className={style.installations__view__list}>
            {Object.entries(limits).map(l => (
              <li
                key={l[0]}
                className={`${style.installations__view__item} ${l[1] ? style.active : null}`}
                onClick={onViewClick}
              >
                {l[0]}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={style.ticketSelection__tickets}>
        <div className={style.ticketSelection__tickets__ticket}><TicketCard /></div>
        <div className={style.ticketSelection__tickets__ticket}><TicketCard /></div>
        <div className={style.ticketSelection__tickets__ticket}><TicketCard /></div>
      </div>

      <Pagination />
    </section>
  );
}