import { FC } from 'react';
import styled from 'styled-components';

import Breadcrumb from 'components/Breadcrumb';
import Container from 'components/Container';
import Icon from 'components/Icon';
import Section from 'components/Section';
import SocialLinkList from 'components/SocialLinkList';
import TitleH3 from 'components/TitleH3';

import { size } from 'styles/variables';

import newsDetail from 'assets/news-detail.jpg';

const BoxTitle = styled.div`
  margin-bottom: 15px;

  h3 {
    margin-bottom: 15px;

    ${size.tabletMin} {
      margin-bottom: 0;
      margin-right: 85px;
    }

    ${size.min1024} {
      margin-right: 200px;
    }

    ${size.desktop} {
      margin-right: 570px;
    }
  }

  ${size.tabletMin} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${size.desktop} {
    margin-bottom: 30px;
  }
`;

const BoxLink = styled.div`
  display: flex;
  color: #4b7159;

  ${size.tabletMin} {
    flex-direction: column;
    align-items: flex-end;
  }

  ${size.min1024} {
    flex-direction: row;
  }
`;

const Sharing = styled.span`
  margin-right: auto;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.3;
  color: #031412;
  text-transform: uppercase;

  ${size.tabletMin} {
    margin-bottom: 10px;
  }

  ${size.min1024} {
    margin-bottom: 0;
    margin-right: 50px;
  }
`;

const BoxImage = styled.div`
  position: relative;
  margin-bottom: 20px;

  ::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(7, 44, 38, 0.7) 0%, rgba(7, 44, 38, 0) 100%);
  }

  ${size.tabletMin} {
    margin-bottom: 30px;
  }

  ${size.desktop} {
    margin-bottom: 45px;
  }
`;

const Image = styled.img`
  height: 110px;

  ${size.tabletMin} {
    height: 100%;
  }
`;

const Badge = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
  padding: 8px 12px;
  font-weight: 700;
  font-size: 18px;
  line-height: 0.9;
  color: #fff;
  background: linear-gradient(92.18deg, #5e3928 20.13%, #e4a16f 92.93%);
  z-index: 1;
`;

const BoxText = styled.div`
  margin-bottom: 25px;

  ${size.tabletMin} {
    margin-bottom: 35px;
  }

  ${size.desktop} {
    margin-bottom: 50px;
  }

  p {
    :not(:last-child) {
      margin-bottom: 10px;

      ${size.tabletMin} {
        margin-bottom: 15px;
      }

      ${size.desktop} {
        margin-bottom: 20px;
      }
    }
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3;
`;

const TitleH4 = styled.h4`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3;
  text-transform: uppercase;

  ${size.tabletMin} {
    margin-bottom: 20px;
    font-size: 24px;
  }
`;

const List = styled.ul`
  margin-bottom: 10px;
  padding-left: 17px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.8;
  list-style-type: disc;

  ${size.tabletMin} {
    margin-bottom: 15px;
  }

  ${size.desktop} {
    margin-bottom: 20px;
    font-weight: 600;
  }
`;

const BoxNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 30px;
  padding-top: 10px;
  border-top: 1px solid #e6e8e7;

  div {
    order: 3;
    flex-grow: 1;

    span {
      ${size.tabletMin} {
        margin-bottom: 0;
        margin-right: 50px;
      }
    }

    ${size.tabletMin} {
      flex-direction: row;
      flex-grow: 0;
      margin-left: auto;
      margin-right: auto;
    }

    ${size.min1024} {
      align-items: center;
      order: initial;
    }
  }

  ${size.tabletMin} {
    padding-top: 25px;
  }

  ${size.desktop} {
    padding-top: 50px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  column-gap: 10px;
  flex-basis: calc((100% - 20px) / 2);
  color: #4b7159;
  text-align: left;
  background-color: transparent;
  border: none;

  .icon {
    flex-shrink: 0;
  }

  :first-child {
    .icon {
      transform: rotate(-180deg);
    }

    ${size.tabletMin} {
      margin-right: 150px;
    }

    ${size.min1024} {
      margin-right: 0;
    }
  }

  ${size.tabletMin} {
    flex-basis: 177px;
  }

  ${size.desktop} {
    flex-basis: initial;
  }
`;

const ButtonText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.1;
  color: #031412;

  ${size.tabletMin} {
    font-size: 16px;
    line-height: 1.3;
  }
`;

const NewsDetail: FC = () => {
  return (
    <Section
      color='#031412'
      padding={{
        topMob: '30px',
        bottomMob: '40px',
        topDesk: '40px',
        bottomTab: '80px',
      }}
    >
      <Container>
        <Breadcrumb />
        <BoxTitle>
          <TitleH3 textAalign='left'>Эфирные масла для улучшения сна</TitleH3>
          <BoxLink>
            <Sharing>Поделиться</Sharing>
            <SocialLinkList />
          </BoxLink>
        </BoxTitle>
        <BoxImage>
          <Image src={newsDetail} alt='News detail' />
          <Badge>27.10.21</Badge>
        </BoxImage>
        <BoxText>
          <Text>
            Проблемы со сном и засыпанием многим знакомы не понаслышке. У каждого есть свой способ
            борьбы с этой проблемой, но большинство уже оценили успокаивающие свойства эфирных
            масел.
          </Text>
          <Text>
            Экстракты некоторых растений благотворно влияют на большинство систем организма, снимают
            стресс и избавляют от негативных эмоций. Правильное использование эфира поможет
            расслабиться и сделать ночной отдых полноценным. Самым лучшим и приятным лекарством от
            усталости и бессонницы являются эфирные масла лаванды, ладана и мелиссы.
          </Text>
        </BoxText>
        <BoxText>
          <TitleH4>Лавандовое масло</TitleH4>
          <Text>
            Лаванда – самое распространенное растение, для создания эфира. И это не удивительно, она
            обладает действительно волшебными свойствами:
          </Text>
          <List>
            <li>способна избавить от агрессии, раздражительности</li>
            <li>снимает стресс</li>
            <li>помогает избавиться от негативных мыслей и эмоций</li>
            <li>помогает успокоиться</li>
            <li>помогает достичь гармонии</li>
          </List>
          <Text>
            Лавандовое эфирное масло нормализует работу нервной и кровеносной систем, стимулирует
            выработку серотонина и стабилизирует гормональный фон. Этим и объясняются ее
            чудодейственные свойства. Кстати, эффективность именно этого эфира в борьбе с
            бессонницей доказана в ходе практических исследований.
          </Text>
        </BoxText>
        <BoxText>
          <TitleH4>Эфирное масло ладана</TitleH4>
          <Text>
            Запах ладана обладает антидепрессивным эффектом, но это не все, на что способен этот
            эфир:
          </Text>
          <List>
            <li>масло ладана успокаивает тело, помогает ему расслабиться</li>
            <li>снимает напряжение</li>
            <li>помогает избавиться от стресса</li>
          </List>
          <Text>Этот компонент просто незаменим при борьбе с бессонницей и ночными страхами.</Text>
        </BoxText>
        <BoxText>
          <TitleH4>Масло мелиссы</TitleH4>
          <Text>
            Эфирное масло мелиссы прекрасно подойдет для тех, кому трудно полностью расслабиться.
            Оно влияет на многие системы в организме:
          </Text>
          <List>
            <li>нормализует сердечный ритм</li>
            <li>стабилизирует функции нервной и сердечно-сосудистой систем</li>
            <li>благоприятно влияет на работу мозга</li>
            <li>снимает физическое и эмоциональное напряжение</li>
          </List>
          <Text>
            Это именно те факторы, которые мешают крепкому сну. Поборов их – вы забудете о
            бессоннице.
          </Text>
        </BoxText>
        <BoxText>
          <TitleH4>Как использовать</TitleH4>
          <Text>
            Самый популярный метод применения эфирных масел – ароматерапия. Достаточно несколько
            капель, чтобы достичь желаемого эффекта. Приобрести эфир можно в любом
            специализированном магазине либо же сделать самостоятельно – с помощью дистиллятора.
            Домашний эфир ничем не уступает покупному, его также можно использовать для аромаламп,
            расслабляющих ванн, массажей и т.д. Главное, найти эфир подходящий именно вам, и тогда
            вы будете не только получать удовольствие от ароматерапии, но и оздоровите свой
            организм. Вы можете не сомневаться в качестве эфирного масла, которое сделаете
            самостоятельно. Процесс создания очень простой и вы гарантированно получите нужный
            эффект.
          </Text>
        </BoxText>
        <BoxNavigation>
          <Button>
            <Icon iconName='arrow' width='18px' height='18px' />
            <ButtonText>Эфирные масла для улучшения сна</ButtonText>
          </Button>
          <BoxLink>
            <Sharing>Поделиться</Sharing>
            <SocialLinkList />
          </BoxLink>
          <Button>
            <ButtonText>Эфирные масла для улучшения сна</ButtonText>
            <Icon iconName='arrow' width='18px' height='18px' />
          </Button>
        </BoxNavigation>
      </Container>
    </Section>
  );
};

export default NewsDetail;
