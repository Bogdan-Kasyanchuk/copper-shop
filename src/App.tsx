import { FC } from 'react';
import HeaderMain from './components/HeaderMain';
// import Header from './components/Header';
// import AboutUs from './components/AboutUs';
// import OurWorth from './components/OurWorth';
// import WhyChooseUs from './components/WhyChooseUs';
// import FooterMain from './components/FooterMain';
// import Footer from './components/Footer';
// import OurHistory from './components/OurHistory';
// import OurGeography from './components/OurGeography';
// import OurClients from './components/OurClients';
// import News from './components/News';
// import NewsDetail from './components/NewsDetail';
// import Catalog from './components/Catalog';
import OurProduction from './components/OurProduction';
import BestSelling from './components/BestSelling';
import Novelties from './components/Novelties';
import WeRecommend from './components/WeRecommend';
import Discounts from './components/Discounts';
import YouWillAlsoInterested from './components/YouWillAlsoInterested';

const App: FC = () => {
  return (
    <>
      <HeaderMain />
      {/* <Header /> */}
      {/* <AboutUs />  */}
      <OurProduction />
      <BestSelling />
      <Novelties />
      <WeRecommend />
      <Discounts />
      <YouWillAlsoInterested />
      {/* <Catalog /> */}
      {/* <News />
      <NewsDetail />
      <OurClients />
      <OurHistory />
      <OurGeography />
      <OurWorth />
      <WhyChooseUs />
      <FooterMain />
      <Footer /> */}
    </>
  );
};

export default App;
