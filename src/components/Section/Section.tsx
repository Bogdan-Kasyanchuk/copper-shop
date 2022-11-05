import { FC } from 'react';
import styled, { css } from 'styled-components';
import { size } from '../../styles/variables';
import { ISectionProps } from '../../interfaces';

const Section: FC<ISectionProps> = ({
  children,
  color,
  background,
  backgroundImage,
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
      background={background as string}
      backgroundImage={backgroundImage as string}
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
  backgroundImage: string;
}>`
  position: relative;
  padding-top: ${({ paddingTopMob }) => paddingTopMob ?? null};
  padding-bottom: ${({ paddingBottomMob }) => paddingBottomMob ?? null};
  color: ${({ color }) => color ?? null};
  background: ${({ background }) => background ?? null};
  ${({ backgroundImage }) =>
    backgroundImage
      ? css`
          background-image: url(${backgroundImage});
          background-size: cover;
        `
      : null};
  ${size.tabletMin} {
    padding-top: ${({ paddingTopTab }) => paddingTopTab ?? null};
    padding-bottom: ${({ paddingBottomTab }) => paddingBottomTab ?? null};
  }

  ${size.desktop} {
    padding-top: ${({ paddingTopDesk }) => paddingTopDesk ?? null};
    padding-bottom: ${({ paddingBottomDesk }) => paddingBottomDesk ?? null};
  }
`;
