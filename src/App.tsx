import { FC } from 'react';

import AboutUs from 'components/AboutUs';
import Basket from 'components/Basket';
import BestSelling from 'components/BestSelling';
import Catalog from 'components/Catalog';
import Discounts from 'components/Discounts';
import Footer from 'components/Footer';
import FooterMain from 'components/FooterMain';
import Header from 'components/Header';
import HeaderMain from 'components/HeaderMain';
import Hero from 'components/Hero';
import LogIn from 'components/LogIn';
import News from 'components/News';
import NewsDetail from 'components/NewsDetail';
import Novelties from 'components/Novelties';
import Order from 'components/Order';
import Orders from 'components/Orders';
import OurClients from 'components/OurClients';
import OurGeography from 'components/OurGeography';
import OurHistory from 'components/OurHistory';
import OurProduction from 'components/OurProduction';
import OurWorth from 'components/OurWorth';
import ProductDetails from 'components/ProductDetails';
import ProfileDetails from 'components/ProfileDetails';
import Promotion from 'components/Promotion';
import Registration from 'components/Registration';
import Reviews from 'components/Reviews';
import ThanksForOrder from 'components/ThanksForOrder';
import WeRecommend from 'components/WeRecommend';
import WhatThinkUs from 'components/WhatThinkUs';
import WhyChooseUs from 'components/WhyChooseUs';
import WishList from 'components/WishList';
import YouWillAlsoInterested from 'components/YouWillAlsoInterested';

const App: FC = () => {
  return (
    <>
      <HeaderMain />
      <Hero />
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
