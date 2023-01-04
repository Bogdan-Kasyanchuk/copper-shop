import { FC } from 'react';
import HeaderMain from './components/HeaderMain';
import WishList from './components/WishList';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import OurWorth from './components/OurWorth';
import WhyChooseUs from './components/WhyChooseUs';
import FooterMain from './components/FooterMain';
import Footer from './components/Footer';
import OurHistory from './components/OurHistory';
import OurGeography from './components/OurGeography';
import OurClients from './components/OurClients';
import News from './components/News';
import NewsDetail from './components/NewsDetail';
import Catalog from './components/Catalog';
import OurProduction from './components/OurProduction';
import BestSelling from './components/BestSelling';
import Novelties from './components/Novelties';
import Promotion from './components/Promotion';
import WeRecommend from './components/WeRecommend';
import Discounts from './components/Discounts';
import YouWillAlsoInterested from './components/YouWillAlsoInterested';
import WhatThinkUs from './components/WhatThinkUs';
import Reviews from './components/Reviews';
import ProfileDetails from './components/ProfileDetails';
import Registration from './components/Registration';
import LogIn from './components/LogIn';
import ThanksForOrder from './components/ThanksForOrder';
import ProductDetails from './components/ProductDetails';
import Orders from './components/Orders';
import Order from './components/Order';
import Basket from './components/Basket';

const App: FC = () => {
  return (
    <>
      <HeaderMain />
      <WishList />
      <ProfileDetails />
      <Registration />
      <LogIn />
      <ThanksForOrder />
      <ProductDetails />
      <Header />
      <AboutUs />
      <OurProduction />
      <BestSelling />
      <Novelties />
      <Promotion />
      <WeRecommend />
      <Discounts />
      <YouWillAlsoInterested />
      <WhatThinkUs />
      <Reviews />
      <Catalog />
      <News />
      <NewsDetail />
      <OurClients />
      <OurHistory />
      <OurGeography />
      <OurWorth />
      <WhyChooseUs />
      <Basket />
      <Orders />
      <Order />
      <FooterMain />
      <Footer />
    </>
  );
};

export default App;
