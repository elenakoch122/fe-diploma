import { useSelector } from 'react-redux';
import style from './SideBar.module.css';
import Filter from './Filter/Filter';
import LastTickets from './LastTickets/LastTickets';
import Details from './Details/Details';

export default function SideBar() {
  const stages = useSelector(state => state.stages);

  return (
    <aside className={style.sideBar}>
      {stages.current >= 2 ? <Details /> : <Filter />}
      <LastTickets />
    </aside>
  );
}