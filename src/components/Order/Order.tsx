import { FC, useState } from 'react';
import styled, { css } from 'styled-components';

import ButtonText from 'components/ButtonText';
import Container from 'components/Container';
import OrderBasket from 'components/OrderBasket';
import Section from 'components/Section';
import TitleH3 from 'components/TitleH3';

import { size } from 'styles/variables';

import avatarNotUser from 'assets/avatar-not-user.jpg';
import avatarUser from 'assets/avatar-user.jpg';
import basket from 'assets/icon-png/user.png';

const Header = styled.div`
  ${size.min1024} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  ${size.desktop} {
    max-width: 924px;
  }

  & > button {
    margin-bottom: 30px;
    color: #a1a1a1;
    background: transparent;
    border: 1px solid #a1a1a1;

    ${size.min1024} {
      margin-left: initial;
      margin-right: initial;
      margin-bottom: initial;
    }
  }

  h3 {
    ${size.min1024} {
      margin-bottom: initial;
    }
  }
`;

const BoxOrder = styled.div`
  ${size.desktop} {
    display: flex;
    column-gap: 30px;
  }
`;

const Main = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #e6e8e7;
  margin-bottom: 30px;

  ${size.desktop} {
    flex-basis: 924px;
    margin-bottom: initial;
    padding-bottom: initial;
    border-bottom: initial;
  }
`;

const BoxUser = styled.div`
  position: relative;
  padding: 20px;
  background-color: #e6e8e7;
  margin-bottom: 30px;

  ::after {
    content: '';
    position: absolute;
    bottom: -15px;
    right: 20px;
    width: 52px;
    height: 70px;
    background-image: url(${basket});
    background-size: cover;

    ${size.tabletMin} {
      bottom: -25px;
      width: 95px;
      height: 126px;
    }
  }

  ${size.tabletMin} {
    display: flex;
    column-gap: 20px;
    align-items: center;
    padding-right: 125px;
    margin-bottom: 40px;
  }
`;

const BoxNotUser = styled.div`
  position: relative;
  padding: 20px;
  background-color: #e6e8e7;
  margin-bottom: 30px;

  ::after {
    content: '';
    position: absolute;
    bottom: -25px;
    right: 20px;
    width: 95px;
    height: 126px;
    background-image: url(${basket});
    background-size: cover;
  }

  ${size.tabletMin} {
    display: flex;
    column-gap: 20px;
    align-items: center;
    margin-bottom: 40px;
    justify-content: space-between;
  }
`;

const BoxButton = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  ${size.tabletMin} {
    margin-top: initial;
    padding-left: 50px;
  }

  ${size.min1024} {
    flex-direction: row;
  }

  button {
    &:last-child {
      background: transparent;
      border: 1px solid #031412;
      color: #031412;
    }

    ${size.tabletMin} {
      min-width: 200px;
    }
  }
`;

const Avatar = styled.img`
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;

  ${size.tabletMin} {
    width: 80px;
    margin-left: initial;
    margin-right: initial;
    margin-bottom: initial;
  }
`;

const BoxText = styled.div`
  text-align: center;

  ${size.tabletMin} {
    text-align: left;
  }
`;

const UserTitle = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.1;
`;

const UserSubtitle = styled.p`
  display: inline-block;
  max-width: 142px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;

  ${size.tabletMin} {
    max-width: initial;
  }
`;

const List = styled.ul`
  counter-reset: section;

  ${size.tabletMin} {
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
  }
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #e6e8e7;
  }

  ${size.tabletMin} {
    &:first-child {
      flex-grow: 1;
    }

    &:nth-child(2) {
      flex-basis: calc((100% - 30px) / 2);
      margin-bottom: initial;
      padding-bottom: initial;
      border-bottom: none;
    }

    &:nth-child(2),
    &:last-child {
      flex-basis: calc((100% - 30px) / 2);
    }
  }
`;

const ItemTitle = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;

  ${size.tabletMin} {
    font-weight: 600;
    font-size: 27px;
  }

  &::before {
    counter-increment: section;
    content: '' counter(section);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    margin-right: 20px;
    font-weight: 700;
    font-size: 30px;
    line-height: 1;
    color: #ffffff;
    background: linear-gradient(278.32deg, #0b3f37 -7.03%, #cb8d62 136.33%);
  }
`;

const FormPersonalData = styled.form`
  ${size.tabletMin} {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    input {
      flex-basis: calc((100% - 30px) / 2);
    }
  }
`;

const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 22px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  border: 1px solid #a1a1a1;

  &:not(:last-child) {
    margin-bottom: 20px;

    ${size.tabletMin} {
      margin-bottom: initial;
    }
  }
`;

const BoxInputCheckbox = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const SpanInput = styled.span<{ checkedType: boolean }>`
  position: absolute;
  top: -2px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  pointer-events: none;
  ${({ checkedType }) =>
    checkedType
      ? css`
          background: linear-gradient(92.18deg, #5e3928 20.13%, #e4a16f 92.93%);
        `
      : css`
          border: 2px solid #a1a1a1;
        `};

  ${size.tabletMin} {
    top: 0;
  }
`;

const InputCheckbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

const SpanCheckbox = styled.span<{ checkedType: boolean }>`
  display: ${({ checkedType }) => (checkedType ? 'block' : 'none')};
  width: 16px;
  height: 16px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
`;

const LabelCheckbox = styled.label<{ checkedType: boolean }>`
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  padding-left: 32px;
  ${({ checkedType }) =>
    checkedType
      ? css`
          background: linear-gradient(92.18deg, #5e3928 20.13%, #e4a16f 92.93%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        `
      : css`
          color: #a1a1a1;
        `};

  ${size.tabletMin} {
    font-size: 20px;
  }
`;

const InputCheckboxText = styled.p`
  margin-top: 15px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
`;

const Footer = styled.div`
  ${size.tabletMin} {
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
  }

  ${size.desktop} {
    flex-basis: calc(100% - 30px - 924px);
  }
`;

const Order: FC = () => {
  const [checkDelivery, setCheckDelivery] = useState<string>('pickupDelivery');
  const [checkPayment, setCheckPayment] = useState<string>('uponReceiptPayment');
  return (
    <Section
      color='#031412'
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topDesk: '80px',
        bottomDesk: '80px',
      }}
    >
      <Container>
        <Header>
          <ButtonText>Назад к покупкам</ButtonText>
          <TitleH3 textAalign='center'>Оформить заказ</TitleH3>
        </Header>
        <BoxOrder>
          <Main>
            <BoxUser>
              <Avatar src={avatarUser} width='60' height='60' />
              <BoxText>
                <UserTitle>Добрый день, Иван Иванов</UserTitle>
                <UserSubtitle>Приятных вам покупок!</UserSubtitle>
              </BoxText>
            </BoxUser>
            <BoxNotUser>
              <Avatar src={avatarNotUser} width='60' height='60' />
              <BoxText>
                <UserTitle>Уже есть аккаунт или хотите зарегистрироваться?</UserTitle>
                <UserSubtitle>Войдите в кабинет и получите скидку!</UserSubtitle>
              </BoxText>
              <BoxButton>
                <ButtonText>Войти</ButtonText>
                <ButtonText>Регистрация</ButtonText>
              </BoxButton>
            </BoxNotUser>
            <List>
              <Item>
                <ItemTitle> Личные данные</ItemTitle>
                <FormPersonalData>
                  <Label htmlFor='inputNamePersonalData'>Имя</Label>
                  <Input type='text' name='name' placeholder='Имя' id='inputNamePersonalData' />
                  <Label htmlFor='inputSurNamePersonalData'>Фамилия</Label>
                  <Input
                    type='text'
                    name='surname'
                    placeholder='Фамилия'
                    id='inputSurNamePersonalData'
                  />
                  <Label htmlFor='inputPhonePersonalData'>Телефон</Label>
                  <Input
                    type='tel'
                    name='phone'
                    placeholder='Телефон'
                    id='inputPhonePersonalData'
                  />
                  <Label htmlFor='inputCountryPersonalData'>Страна</Label>
                  <Input
                    type='text'
                    name='country'
                    placeholder='Страна'
                    id='inputCountryPersonalData'
                  />

                  <Label htmlFor='inputEmailPersonalData'>Почта</Label>
                  <Input
                    type='email'
                    name='email'
                    placeholder='E-mail'
                    id='inputEmailPersonalData'
                  />
                  <Label htmlFor='inputCityPersonalData'>Город</Label>
                  <Input type='text' name='city' placeholder='Город' id='inputCityPersonalData' />
                </FormPersonalData>
              </Item>
              <Item>
                <ItemTitle>Доставка</ItemTitle>
                <form>
                  <BoxInputCheckbox>
                    <SpanInput checkedType={checkDelivery === 'pickupDelivery'}>
                      <InputCheckbox
                        type='radio'
                        name='delivery'
                        checked={checkDelivery === 'pickupDelivery'}
                        value='pickupDelivery'
                        id='inputPickupDelivery'
                        onChange={(e) => setCheckDelivery(e.target.value)}
                      />
                      <SpanCheckbox checkedType={checkDelivery === 'pickupDelivery'} />
                    </SpanInput>
                    <LabelCheckbox
                      checkedType={checkDelivery === 'pickupDelivery'}
                      htmlFor='inputPickupDelivery'
                    >
                      Самовывоз
                    </LabelCheckbox>
                    <InputCheckboxText>
                      Вы можете забрать из нашего официального магазина по адресу Бажана 8-Б, Киев,
                      02132 Украина
                    </InputCheckboxText>
                  </BoxInputCheckbox>
                  <BoxInputCheckbox>
                    <SpanInput checkedType={checkDelivery === 'newPoshtaDelivery'}>
                      <InputCheckbox
                        type='radio'
                        name='delivery'
                        checked={checkDelivery === 'newPoshtaDelivery'}
                        value='newPoshtaDelivery'
                        id='inputNewPoshtaDelivery'
                        onChange={(e) => setCheckDelivery(e.target.value)}
                      />
                      <SpanCheckbox checkedType={checkDelivery === 'newPoshtaDelivery'} />
                    </SpanInput>
                    <LabelCheckbox
                      checkedType={checkDelivery === 'newPoshtaDelivery'}
                      htmlFor='inputNewPoshtaDelivery'
                    >
                      Новая почта
                    </LabelCheckbox>
                    <InputCheckboxText>
                      Вы можете забрать из нашего официального магазина по адресу Бажана 8-Б, Киев,
                      02132 Украина
                    </InputCheckboxText>
                  </BoxInputCheckbox>
                  <BoxInputCheckbox>
                    <SpanInput checkedType={checkDelivery === 'courierNewPoshtaDelivery'}>
                      <InputCheckbox
                        type='radio'
                        name='delivery'
                        checked={checkDelivery === 'courierNewPoshtaDelivery'}
                        value='courierNewPoshtaDelivery'
                        id='inputCourierNewPoshtaDelivery'
                        onChange={(e) => setCheckDelivery(e.target.value)}
                      />
                      <SpanCheckbox checkedType={checkDelivery === 'courierNewPoshtaDelivery'} />
                    </SpanInput>
                    <LabelCheckbox
                      checkedType={checkDelivery === 'courierNewPoshtaDelivery'}
                      htmlFor='inputCourierNewPoshtaDelivery'
                    >
                      Курьер “Новая почта”
                    </LabelCheckbox>
                    <InputCheckboxText>
                      Вы можете забрать из нашего официального магазина по адресу Бажана 8-Б, Киев,
                      02132 Украина
                    </InputCheckboxText>
                  </BoxInputCheckbox>
                </form>
              </Item>
              <Item>
                <ItemTitle>Оплата</ItemTitle>
                <form>
                  <BoxInputCheckbox>
                    <SpanInput checkedType={checkPayment === 'uponReceiptPayment'}>
                      <InputCheckbox
                        type='radio'
                        name='payment'
                        checked={checkPayment === 'uponReceiptPayment'}
                        value='uponReceiptPayment'
                        id='inputUponReceiptPayment'
                        onChange={(e) => setCheckPayment(e.target.value)}
                      />
                      <SpanCheckbox checkedType={checkPayment === 'uponReceiptPayment'} />
                    </SpanInput>
                    <LabelCheckbox
                      checkedType={checkPayment === 'uponReceiptPayment'}
                      htmlFor='inputUponReceiptPayment'
                    >
                      При получении
                    </LabelCheckbox>
                  </BoxInputCheckbox>
                  <BoxInputCheckbox>
                    <SpanInput checkedType={checkPayment === 'onlineCardPayment'}>
                      <InputCheckbox
                        type='radio'
                        name='payment'
                        checked={checkPayment === 'onlineCardPayment'}
                        value='onlineCardPayment'
                        id='inputOnlineCardPayment'
                        onChange={(e) => setCheckPayment(e.target.value)}
                      />
                      <SpanCheckbox checkedType={checkPayment === 'onlineCardPayment'} />
                    </SpanInput>
                    <LabelCheckbox
                      checkedType={checkPayment === 'onlineCardPayment'}
                      htmlFor='inputOnlineCardPayment'
                    >
                      Онлайн-оплата картой
                    </LabelCheckbox>
                  </BoxInputCheckbox>
                </form>
              </Item>
            </List>
          </Main>
          <Footer>
            <OrderBasket />
          </Footer>
        </BoxOrder>
      </Container>
    </Section>
  );
};

export default Order;
