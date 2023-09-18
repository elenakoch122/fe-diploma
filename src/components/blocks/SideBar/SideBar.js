import style from './SideBar.module.css';
import Filter from './Filter/Filter';
import LastTickets from './LastTickets/LastTickets';

export default function SideBar() {
  return (
    <aside className={style.sideBar}>
      <Filter />
      {/* <Details /> */}
      <LastTickets />
    </aside>
  );
}