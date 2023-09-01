import Main from '../../blocks/Main/Main';
import About from '../../blocks/About/About';
import HowItWorks from '../../blocks/HowItWorks/HowItWorks';
import Reviews from '../../blocks/Reviews/Reviews';

export default function MainPage() {
  document.title = 'Главная';
  return (
    <>
      <Main />
      <About />
      <HowItWorks />
      <Reviews />
    </>
  );
}