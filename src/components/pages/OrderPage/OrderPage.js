import { Outlet } from "react-router-dom";
import Search from "../../blocks/Search/Search";
import StageBar from "../../blocks/StageBar/StageBar";
import SideBar from "../../blocks/SideBar/SideBar";
import Wrapper from "../../Wrapper";

export default function OrderPage() {
  return (
    <>
      <Search />
      <StageBar />
      <div className="order">
        <Wrapper>
          <SideBar />
          <Outlet />
        </Wrapper>
      </div>
    </>
  );
}