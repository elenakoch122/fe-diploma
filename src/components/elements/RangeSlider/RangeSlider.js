import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import style from './RangeSlider.module.css';
import moment from "moment";

export default function RangeSlider({ min, max, step, type = null }) {
  const [values, setValues] = useState([min, max]);

  return (
    <Range
      step={step}
      min={min}
      max={max}
      values={values}
      onChange={(newValues) => setValues(newValues)}

      renderTrack={({ props, children }) => (
        <div
          {...props}
          className={style.track}
          style={{
            background: getTrackBackground({
              values,
              colors: ['transparent', '#FFA800', 'transparent'],
              min: min,
              max: max,
            }),
          }}
        >
          {children}
        </div>
      )}

      renderThumb={({ props, index }) => (
        <div {...props} className={style.thumb}>
          <div className={style.caption}>
            {type !== 'time' ? values[index] : (
              values[index] !== 24 ? moment(values[index], 'h').format('HH:mm') : '24:00'
            )}
          </div>
        </div>
      )}
    />
  );
}