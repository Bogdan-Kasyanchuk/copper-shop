import { FC } from 'react';
import OurWorth from './components/OurWorth';
import WhyChooseUs from './components/WhyChooseUs';
import FooterMain from './components/FooterMain';
import OurClients from './components/OurClients';

const App: FC = () => {
  return (
    <>
      <OurClients />
      <OurWorth />
      <WhyChooseUs />
      <FooterMain />
    </>
  );
};

export default App;
