import { Outlet } from "react-router-dom";
import Search from "../../blocks/Search/Search";
import StageBar from "../../blocks/StageBar/StageBar";
import SideBar from "../../blocks/SideBar/SideBar";

export default function OrderPage() {
  return (
    <>
      <Search />
      <StageBar />
      <div className="order">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}