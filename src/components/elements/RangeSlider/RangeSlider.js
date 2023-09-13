import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import style from './RangeSlider.module.css';

export default function RangeSlider({ min, max, step }) {
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
            {values[index]}
          </div>
        </div>
      )}
    />
  );
}