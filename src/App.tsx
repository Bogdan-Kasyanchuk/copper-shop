import { FC } from 'react';
import OurWorth from './components/OurWorth';
import WhyChooseUs from './components/WhyChooseUs';
import FooterMain from './components/FooterMain';
// import Footer from './components/Footer';

const App: FC = () => {
  return (
    <>
      <OurWorth />
      <WhyChooseUs />
      <FooterMain />
      {/* <Footer /> */}
    </>
  );
};

export default App;
