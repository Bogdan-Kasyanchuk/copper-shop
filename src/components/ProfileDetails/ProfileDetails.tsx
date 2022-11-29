import { FC, useState } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import TitleH3 from '../TitleH3';
import ButtonIconText from '../ButtonIconText';
import ButtonText from '../ButtonText';
import Icon from '../Icon';
import { size } from '../../styles/variables';
import avatarUser from '../../assets/avatar-user.jpg';
import upload from '../../assets/icon-png/upload.png';

const ProfileDetails: FC = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const toggleHidden = (): void => {
    setIsHidden(!isHidden);
  };

  return (
    <Section
      color="#031412"
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topDesk: '80px',
        bottomDesk: '80px',
      }}
    >
      <Container>
        <TitleH3 textAalign="left">Личный кабинет</TitleH3>
        <BoxProfileDetails>
          <BoxButton>
            <ButtonIconText iconName="user" widthIcon="26px" heightIcon="26px">
              Детали профиля
            </ButtonIconText>
            <ButtonIconText
              iconName="basket-order"
              widthIcon="26px"
              heightIcon="26px"
            >
              Заказы
            </ButtonIconText>
            <ButtonIconText iconName="heart" widthIcon="26px" heightIcon="26px">
              Список желаемого
            </ButtonIconText>
            <ButtonIconText
              iconName="logout"
              widthIcon="26px"
              heightIcon="26px"
            >
              Выйти
            </ButtonIconText>
          </BoxButton>
          <BoxProfile>
            <BoxAvatarUserName>
              <Avatar src={avatarUser} width="120" height="120"></Avatar>
              <BoxUserNameButton>
                <GoodDay>Добрый день</GoodDay>
                <UserName>Иван Иванов</UserName>
                <ButtonUpload>Загрузить фото</ButtonUpload>
              </BoxUserNameButton>
            </BoxAvatarUserName>
            <FormContacts>
              <Label htmlFor="inputName">Имя</Label>
              <Input
                type="text"
                name="name"
                placeholder="Иван Иванов"
                id="inputName"
              />
              <Label htmlFor="inputPhone">Телефон</Label>
              <Input
                type="tel"
                name="phone"
                placeholder="+38 000 000 00 00"
                id="inputPhone"
              />
              <Label htmlFor="inputEmail">Почта</Label>
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                id="inputEmail"
              />
              <Label htmlFor="inputCountry">Страна</Label>
              <Input
                type="text"
                name="country"
                placeholder="Украина"
                id="inputCountry"
              />
              <Label htmlFor="inputCity">Город</Label>
              <Input
                type="text"
                name="city"
                placeholder="Днепр"
                id="inputCity"
              />
              <Label htmlFor="inputStreet">Улица</Label>
              <Input
                type="text"
                name="street"
                placeholder="ул. Шевченка"
                id="inputStreet"
              />
              <ButtonText>Сохранить</ButtonText>
            </FormContacts>
            <TitleInput>Пароль</TitleInput>
            <FormPassword>
              <Label htmlFor="inputPassword">Пароль</Label>
              <BoxInput className="box-input_password">
                <Input
                  type={isHidden ? 'password' : 'text'}
                  name="password"
                  placeholder="Password"
                  id="inputPassword"
                />
                <Icon
                  iconName={isHidden ? 'eye-hidden' : 'eye'}
                  width="18px"
                  height="18px"
                  handlerClick={toggleHidden}
                />
              </BoxInput>
              <ButtonText>Сменить пароль</ButtonText>
            </FormPassword>
            <TitleInput>Платежная система</TitleInput>
            <FormPayment>
              <Label htmlFor="inputNumberCard">Номер карты</Label>
              <BoxInput className="box-input_number-card">
                <Input
                  type="text"
                  name="numberCard"
                  placeholder="5115 5555 5555 5555"
                  id="inputNumberCard"
                />
                <Icon iconName="card" width="18px" height="13px" />
              </BoxInput>
              <Label htmlFor="inputDateCard">Срок действия карты</Label>
              <BoxInput className="box-input_date-card">
                <Input
                  type="text"
                  name="dateCard"
                  placeholder="07/24"
                  id="inputDateCard"
                />
              </BoxInput>
              <Label htmlFor="inputCvvCard">Cvv код</Label>
              <BoxInput className="box-input_cvv-card">
                <Input
                  type="password"
                  name="cvvCard"
                  placeholder="***"
                  id="inputCvvCard"
                />
              </BoxInput>
              <ButtonText>Сохранить</ButtonText>
            </FormPayment>
          </BoxProfile>
        </BoxProfileDetails>
      </Container>
    </Section>
  );
};

export default ProfileDetails;

const BoxProfileDetails = styled.div`
  ${size.desktop} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const BoxButton = styled.div`
  margin-bottom: 30px;

  button {
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }

  ${size.tabletMin} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: -20px;
    margin-left: -20px;

    button {
      margin-top: 20px;
      margin-left: 20px;
      flex-basis: calc((100% - 40px) / 2);

      :not(:last-child) {
        margin-bottom: 0;
      }
    }
  }

  ${size.min1024} {
    button {
      flex-basis: calc((100% - 60px) / 3);
    }
  }

  ${size.desktop} {
    flex-basis: 23%;
    display: initial;
    margin-top: initial;
    margin-left: initial;

    button {
      margin-top: initial;
      margin-left: initial;

      :not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }
`;

const BoxProfile = styled.div`
  ${size.desktop} {
    flex-basis: calc(100% - 154px - 23%);
  }
`;

const BoxAvatarUserName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  ${size.tabletMin} {
    justify-content: flex-start;
  }
`;

const Avatar = styled.img`
  margin-right: 15px;
  border-radius: 50%;

  ${size.tabletMin} {
    margin-right: 20px;
    width: 160px;
  }

  ${size.min1024} {
    margin-right: 30px;
  }
`;

const BoxUserNameButton = styled.div``;

const GoodDay = styled.p`
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;

  ${size.tabletMin} {
    margin-bottom: 25px;
    font-weight: 600;
    font-size: 20px;
  }
`;

const UserName = styled.p`
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1;

  ${size.tabletMin} {
    margin-bottom: 25px;
    font-size: 27px;
  }
`;

const ButtonUpload = styled.button`
  position: relative;
  padding-left: 22px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.1;
  background-color: transparent;

  &::before {
    position: absolute;
    content: '';
    left: 0;
    width: 16px;
    height: 15px;
    background-image: url(${upload});
  }
`;

const FormContacts = styled.form`
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e6e8e7;

  ${size.tabletMin} {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    input {
      flex-basis: calc((100% - 30px) / 2);
      margin-bottom: initial;
    }

    button {
      flex-basis: calc((100% - 30px) / 2);
      margin-left: initial;
      margin-right: initial;
      min-width: 319px;
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
  margin-bottom: 20px;
  width: 100%;
  padding: 16px 22px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  border: 1px solid #a1a1a1;
`;

const FormPassword = styled.form`
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e6e8e7;

  .box-input_password {
    position: relative;

    .icon {
      position: absolute;
      top: 50%;
      right: 22px;
      fill: #a1a1a1;
      stroke: #a1a1a1;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }

  ${size.tabletMin} {
    display: flex;
    justify-content: space-between;

    .box-input_password {
      flex-basis: calc((100% - 30px) / 2);
      margin-bottom: initial;
    }

    button {
      flex-basis: calc((100% - 30px) / 2);
      margin-left: initial;
      margin-right: initial;
      min-width: 319px;
    }
  }
`;

const TitleInput = styled.p`
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
`;

const BoxInput = styled.span`
  display: block;
  margin-bottom: 20px;
  width: 100%;

  input {
    margin-bottom: initial;
  }
`;

const FormPayment = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .box-input_number-card {
    position: relative;

    .icon {
      position: absolute;
      top: 50%;
      right: 22px;
      fill: #a1a1a1;
      stroke: #a1a1a1;
      transform: translateY(-50%);
    }
  }

  .box-input_date-card,
  .box-input_cvv-card {
    position: relative;
    flex-basis: calc((100% - 20px) / 2);

    input {
      padding-left: 68px;
      padding-right: 12px;
    }

    &::before {
      position: absolute;
      top: 50%;
      left: 12px;
      font-weight: 600;
      font-size: 18px;
      line-height: 1;
      color: #a1a1a1;
      transform: translateY(-50%);
    }
  }

  .box-input_date-card {
    &::before {
      content: 'Дата:';
      letter-spacing: -1px;
    }
  }

  .box-input_cvv-card {
    &::before {
      content: 'cvv:';
      text-transform: uppercase;
    }
  }

  ${size.tabletMin} {
    gap: 30px;

    .box-input_number-card {
      flex-basis: calc((100% - 30px) / 2);
      margin-bottom: initial;
    }

    .box-input_date-card,
    .box-input_cvv-card {
      flex-basis: calc((100% - (50% - 15px) - 60px) / 2);
      margin-bottom: initial;
    }

    button {
      flex-basis: calc((100% - 30px) / 2);
      margin-left: initial;
      margin-right: initial;
      min-width: 319px;
    }
  }
`;
