import style from './Reviews.module.css';

import Wrapper from '../../Wrapper';
import Review from '../../elements/Review/Review';

import img1 from '../../../assets/images/reviewer1.png';

export default function Reviews() {
  return (
    <section className={style.reviews}>
      <Wrapper>
        <h1 className={style.reviews__title}>Отзывы</h1>

        <Review
          reviewer="Екатерина Вальнова"
          text="Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые."
          img={img1}
        />
      </Wrapper>
    </section>
  );
}