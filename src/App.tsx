import { FC } from 'react';
import HeaderMain from './components/HeaderMain';
// import Header from './components/Header';
import AboutUs from './components/AboutUs';
import OurWorth from './components/OurWorth';
import WhyChooseUs from './components/WhyChooseUs';
import FooterMain from './components/FooterMain';
import OurHistory from './components/OurHistory';
import OurGeography from './components/OurGeography';
import OurClients from './components/OurClients';

const App: FC = () => {
  return (
    <>
      <HeaderMain />
      {/* <Header /> */}
      <AboutUs />
      <OurClients />
      <OurHistory />
      <OurGeography />
      <OurWorth />
      <WhyChooseUs />
      <FooterMain />
    </>
  );
};

export default App;