import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setColor } from "../../../slices/stages";

import Search from "../../blocks/Search/Search";
import StageBar from "../../blocks/StageBar/StageBar";

export default function TicketSelectionPage() {
  document.title = 'Выбор поезда';
  const dispatch = useDispatch();
  useEffect(() => dispatch(setColor(1)), [dispatch]);

  return (
    <>
      <Search />
      <StageBar />
    </>
  );
}