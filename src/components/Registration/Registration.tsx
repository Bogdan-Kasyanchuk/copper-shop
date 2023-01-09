import { FC, useState } from 'react';
import styled from 'styled-components';

import ButtonText from 'components/ButtonText';
import Container from 'components/Container';
import Icon from 'components/Icon';
import Section from 'components/Section';
import TitleH3 from 'components/TitleH3';

import { size } from 'styles/variables';

const BoxRegistration = styled.div`
  & > button {
    margin-bottom: 70px;
    color: #a1a1a1;
    background: transparent;
    border: 1px solid #a1a1a1;

    ${size.tabletMin} {
      margin-bottom: 90px;
      margin-left: initial;
      margin-right: initial;
    }

    ${size.desktop} {
      margin-bottom: 130px;
    }
  }
`;

const FormRegistration = styled.form`
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;

  ${size.tabletMin} {
    margin-left: auto;
    margin-right: auto;
    max-width: 380px;
    padding-left: initial;
    padding-right: initial;

    button {
      width: 100%;
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

  ${size.tabletMin} {
    margin-bottom: 30px;
  }
`;

const BoxInput = styled.span`
  position: relative;
  display: block;
  margin-bottom: 20px;
  width: 100%;

  .icon {
    position: absolute;
    top: 50%;
    right: 22px;
    fill: #a1a1a1;
    stroke: #a1a1a1;
    transform: translateY(-50%);
    cursor: pointer;
  }

  input {
    margin-bottom: initial;
  }

  ${size.tabletMin} {
    margin-bottom: 30px;
  }
`;

const ButtonLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 24px;
  color: #fff;
  background: linear-gradient(285.45deg, #0b3f37 38.27%, #cb8d62 141.81%);

  span {
    &:last-child {
      font-weight: 700;
    }
  }

  ${size.tabletMin} {
    max-width: 450px;
  }
`;

const Text = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
`;

const Registration: FC = () => {
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true);
  const [isHiddenConfirmPassword, setIsHiddenConfirmPassword] = useState<boolean>(true);

  const toggleHiddenPassword = (): void => {
    setIsHiddenPassword(!isHiddenPassword);
  };

  const toggleHiddenConfirmPassword = (): void => {
    setIsHiddenConfirmPassword(!isHiddenConfirmPassword);
  };

  return (
    <Section
      color='#031412'
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topDesk: '100px',
        bottomDesk: '100px',
      }}
    >
      <Container>
        <BoxRegistration>
          <ButtonText>Назад на главную</ButtonText>
          <TitleH3 textAalign='center'>Регистрация</TitleH3>
          <FormRegistration>
            <Label htmlFor='inputEmailRegistration'>Почта</Label>
            <Input type='email' name='email' placeholder='E-mail' id='inputEmailRegistration' />
            <Label htmlFor='inputPasswordRegistration'>Пароль</Label>
            <BoxInput>
              <Input
                type={isHiddenPassword ? 'password' : 'text'}
                name='password'
                placeholder='Пароль'
                id='inputPasswordRegistration'
              />
              <Icon
                iconName={isHiddenPassword ? 'eye-hidden' : 'eye'}
                width='18px'
                height='18px'
                handlerClick={toggleHiddenPassword}
              />
            </BoxInput>
            <Label htmlFor='inputConfirmPasswordRegistration'>Пароль</Label>
            <BoxInput>
              <Input
                type={isHiddenConfirmPassword ? 'password' : 'text'}
                name='confirmPassword'
                placeholder='Повторите пароль'
                id='inputConfirmPasswordRegistration'
              />
              <Icon
                iconName={isHiddenConfirmPassword ? 'eye-hidden' : 'eye'}
                width='18px'
                height='18px'
                handlerClick={toggleHiddenConfirmPassword}
              />
            </BoxInput>
            <ButtonText>Регистрация</ButtonText>
          </FormRegistration>
          <ButtonLink>
            <Text>Есть аккаунт?</Text>
            <Text>Войти</Text>
          </ButtonLink>
        </BoxRegistration>
      </Container>
    </Section>
  );
};

export default Registration;
