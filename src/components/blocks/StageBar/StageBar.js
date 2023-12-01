import { useSelector } from 'react-redux';
import Wrapper from '../../Wrapper';
import Stage from '../../elements/Stage/Stage';
import style from './StageBar.module.css';
import { useEffect, useState } from 'react';

export default function StageBar() {
  const stages = useSelector(state => state.stages.stages);
  const currentStage = useSelector(state => state.stages.current);
  const [listClasses, setListClasses] = useState(`${style.stageBar__list} ${style.dark}`);

  useEffect(() => {
    currentStage === 4 ? setListClasses(`${style.stageBar__list} ${style.orange}`) : setListClasses(`${style.stageBar__list} ${style.dark}`);
  }, [currentStage]);

  return (
    <div className={style.stageBar}>
      <Wrapper>
        <ul className={listClasses}>
          {Object.entries(stages).map(s => {
            return (
              <li className={style.stageBar__item} key={s[0]}>
                <Stage number={s[0]} name={s[1].name} color={s[1].color} />
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </div>
  );
}