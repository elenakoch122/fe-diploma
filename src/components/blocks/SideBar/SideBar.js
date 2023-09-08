import Filter from './Filter/Filter';
import style from './SideBar.module.css';

export default function SideBar() {
  return (
    <aside className={style.sideBar}>
      <Filter />
      {/* <Details />
      <LastTickets /> */}
    </aside>
  );
}