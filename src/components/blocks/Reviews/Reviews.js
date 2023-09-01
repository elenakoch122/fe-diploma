import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { v4 as uuidv4 } from 'uuid';
import style from './Reviews.module.css';

import Wrapper from '../../Wrapper';
import Review from '../../elements/Review/Review';

import { reviews } from '../../../data/reviews';

export default function Reviews() {
  return (
    <section className={style.reviews} id='reviews'>
      <Wrapper>
        <h1 className={style.reviews__title}>Отзывы</h1>

        <Carousel
          showThumbs={false}
          showArrows={false}
          showStatus={false}
        >
          {reviews.map(item => (
            <div className={style.reviews__content} key={uuidv4()}>
              {item.map(r => (
                <Review review={r} key={r.id}/>
              ))}
            </div>
          ))}
        </Carousel>
      </Wrapper>
    </section>
  );
}