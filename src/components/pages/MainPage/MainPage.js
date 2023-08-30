import Main from '../../blocks/Main/Main';
import About from '../../blocks/About/About';
import Advantages from '../../blocks/Advantages/Advantages';
import Reviews from '../../blocks/Reviews/Reviews';

export default function MainPage() {
  document.title = 'Главная';
  return (
    <>
      <Main />
      <About />
      <Advantages />
      <Reviews />
    </>
  );
}