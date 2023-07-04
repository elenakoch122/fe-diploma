import style from './About.module.css';
import Wrapper from './blocks/Wrapper';

export default function About() {
  return (
    <section className={style.about} id='about'>
      <Wrapper>
        <h1 className={style.about__title}>О нас</h1>

        <div className={style.about__content}>
          <p className={`${style.about__text} ${style.text_normal}`}>
            Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем<br />
            все больше людей заказывают жд билеты через интернет.
          </p>

          <p className={`${style.about__text} ${style.text_normal}`}>
            Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать?<br />
            Мы расскажем о преимуществах заказа через интернет.
          </p>

          <p className={`${style.about__text} ${style.text_bold}`}>
            Покупать жд билеты дешево можно за 90 суток до отправления поезда.<br />
            Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
          </p>
        </div>
      </Wrapper>
    </section>
  );
}
