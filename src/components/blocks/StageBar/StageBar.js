import { useSelector } from 'react-redux';
import Wrapper from '../../Wrapper';
import Stage from '../../elements/Stage/Stage';
import style from './StageBar.module.css';

export default function StageBar() {
  const stages = useSelector(state => state.stages);

  return (
    <div className={style.stageBar}>
      <Wrapper>
        <ul className={style.stageBar__list}>
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