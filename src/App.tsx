import { FC } from 'react';
import OurWorth from './components/OurWorth';
import WhyChooseUs from './components/WhyChooseUs';
import FooterMain from './components/FooterMain';
import OurHistory from './components/OurHistory';
import OurClients from './components/OurClients';

const App: FC = () => {
  return (
    <>
      <OurClients />
      <OurHistory />
      <OurWorth />
      <WhyChooseUs />
      <FooterMain />
    </>
  );
};

export default App;
