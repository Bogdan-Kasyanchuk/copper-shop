import { FC } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import ButtonText from '../ButtonText';
import { size } from '../../styles/variables';
import thanksForOrder from '../../assets/thanks-for-order.jpg';

const ThanksForOrder: FC = () => {
  return (
    <Section
      color="#031412"
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topDesk: '100px',
        bottomDesk: '100px',
      }}
    >
      <Container>
        <BoxThanksForOrder>
          <BoxImage>
            <Image
              src={thanksForOrder}
              width="360px"
              height="316px"
              alt="Thanks for order"
            />
          </BoxImage>
          <Title>Спасибо за заказ</Title>
          <Text>Мы свяжемся с вами в ближайшее время</Text>
          <ButtonText>Главная</ButtonText>
        </BoxThanksForOrder>
      </Container>
    </Section>
  );
};

export default ThanksForOrder;

const BoxThanksForOrder = styled.div`
  ${size.tabletMin} {
    button {
      min-width: 450px;
    }
  }
`;

const BoxImage = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  width: 230px;

  ${size.tabletMin} {
    margin-bottom: 20px;
    width: initial;
  }
`;

const Image = styled.img`
  ${size.tabletMin} {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Title = styled.p`
  margin-bottom: 15px;
  font-family: 'Lighthaus';
  font-weight: 400;
  font-size: 30px;
  line-height: 1.1;
  text-align: center;
  text-transform: uppercase;

  ${size.tabletMin} {
    margin-bottom: 35px;
    font-size: 50px;
  }
`;

const Text = styled.p`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  text-align: center;

  ${size.tabletMin} {
    margin-bottom: 35px;
    margin-left: auto;
    margin-right: auto;
    max-width: 350px;
    font-weight: 600;
    font-size: 27px;
  }
`;
