import { FC } from 'react';
import styled from 'styled-components';

import { size } from 'styles/variables';

import { ISectionProps } from 'interfaces';

const SectionTag = styled.section<{
  paddingTopMob: string;
  paddingBottomMob: string;
  paddingTopTab: string;
  paddingBottomTab: string;
  paddingTopDesk: string;
  paddingBottomDesk: string;
  color: string;
  backgroundColor: string;
  background: string;
}>`
  position: fixed;
  z-index: 900;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: ${({ paddingTopMob }) => paddingTopMob ?? null};
  padding-bottom: ${({ paddingBottomMob }) => paddingBottomMob ?? null};
  color: ${({ color }) => color ?? null};
  background-color: ${({ backgroundColor }) => backgroundColor ?? null};
  background: ${({ background }) => background ?? null};
  // background='linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)'

  ${size.tabletMin} {
    padding-top: ${({ paddingTopTab }) => paddingTopTab ?? null};
    padding-bottom: ${({ paddingBottomTab }) => paddingBottomTab ?? null};
    background: ${({ background }) => background ?? null};
  }

  ${size.desktop} {
    padding-top: ${({ paddingTopDesk }) => paddingTopDesk ?? null};
    padding-bottom: ${({ paddingBottomDesk }) => paddingBottomDesk ?? null};
    background: ${({ background }) => background ?? null};
  }
`;

const SectionHeader: FC<ISectionProps> = ({
  children,
  color,
  backgroundColor,
  background,
  padding,
}) => {
  return (
    <SectionTag
      paddingTopMob={padding?.topMob as string}
      paddingBottomMob={padding?.bottomMob as string}
      paddingTopTab={padding?.topTab as string}
      paddingBottomTab={padding?.bottomTab as string}
      paddingTopDesk={padding?.topDesk as string}
      paddingBottomDesk={padding?.bottomDesk as string}
      color={color as string}
      backgroundColor={backgroundColor as string}
      background={background as string}
    >
      {children}
    </SectionTag>
  );
};

export default SectionHeader;
