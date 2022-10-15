import { FC } from 'react';
import HeaderMain from './components/HeaderMain';
// import Header from './components/Header';
import OurWorth from './components/OurWorth';
import WhyChooseUs from './components/WhyChooseUs';
import FooterMain from './components/FooterMain';
// import Footer from './components/Footer';

const App: FC = () => {
  return (
    <>
      <HeaderMain />
      {/* <Header /> */}
      <OurWorth />
      <WhyChooseUs />
      <FooterMain />
      {/* <Footer /> */}
    </>
  );
};

export default App;
