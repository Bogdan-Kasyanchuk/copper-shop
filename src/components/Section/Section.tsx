import { FC } from 'react';
import styled from 'styled-components';
import { size } from '../../styles/variables';
import { ISectionProps } from '../../interfaces';

const Section: FC<ISectionProps> = ({
  children,
  color,
  background,
  padding,
}) => {
  return (
    <SectionTag
      paddingTopMob={padding?.topMob!}
      paddingBottomMob={padding?.bottomMob!}
      paddingTopTab={padding?.topTab!}
      paddingBottomTab={padding?.bottomTab!}
      paddingTopDesk={padding?.topDesk!}
      paddingBottomDesk={padding?.bottomDesk!}
      color={color!}
      background={background!}
    >
      {children}
    </SectionTag>
  );
};

export default Section;

const SectionTag = styled.section<{
  paddingTopMob: string;
  paddingBottomMob: string;
  paddingTopTab: string;
  paddingBottomTab: string;
  paddingTopDesk: string;
  paddingBottomDesk: string;
  color: string;
  background: string;
}>`
  position: relative;
  padding-top: ${({ paddingTopMob }) => paddingTopMob ?? null};
  padding-bottom: ${({ paddingBottomMob }) => paddingBottomMob ?? null};
  color: ${({ color }) => color ?? null};
  background: ${({ background }) => background ?? null};

  ${size.tabletMin} {
    padding-top: ${({ paddingTopTab }) => paddingTopTab ?? null};
    padding-bottom: ${({ paddingBottomTab }) => paddingBottomTab ?? null};
  }

  ${size.desktop} {
    padding-top: ${({ paddingTopDesk }) => paddingTopDesk ?? null};
    padding-bottom: ${({ paddingBottomDesk }) => paddingBottomDesk ?? null};
  }
`;
