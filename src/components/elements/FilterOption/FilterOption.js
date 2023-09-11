import { useState } from 'react';
import style from './FilterOption.module.css';
import Switch from "react-switch";

export default function FilterOption({ option }) {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => setIsChecked(!isChecked);

  return (
    <div className={style.option}>
      <img src={option.url} alt="" />
      <span className={style.option__name}>{option.name}</span>
      <Switch
        width={72}
        height={19}
        onChange={onChange}
        checked={isChecked}
        offColor='#FFF'
        offHandleColor='#C4C4C4'
        onColor='#FCDC9D'
        onHandleColor='#FFA800'
        handleDiameter={28}
        uncheckedIcon={false}
        checkedIcon={false}
        activeBoxShadow='0 0 2px 3px ##FFA800'
        className={style.option__switch}
      />
    </div>
  );
}