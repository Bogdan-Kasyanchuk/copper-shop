import { FC } from 'react';
import styled, { css } from 'styled-components';
import { size } from '../../styles/variables';
import { ISectionProps } from '../../interfaces';

const Section: FC<ISectionProps> = ({
  children,
  color,
  backgroundColor,
  background,
  backgroundImage,
  backgroundRepeat,
  backgroundPosition,
  backgroundSize,
  backgroundAttachment,
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
      backgroundImage={backgroundImage as string}
      backgroundRepeat={backgroundRepeat as string}
      backgroundPosition={backgroundPosition as string}
      backgroundSize={backgroundSize as string}
      backgroundAttachment={backgroundAttachment as string}
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
  backgroundColor: string;
  background: string;
  backgroundImage: string;
  backgroundRepeat: string;
  backgroundPosition: string;
  backgroundSize: string;
  backgroundAttachment: string;
}>`
  position: relative;
  padding-top: ${({ paddingTopMob }) => paddingTopMob ?? null};
  padding-bottom: ${({ paddingBottomMob }) => paddingBottomMob ?? null};
  color: ${({ color }) => color ?? null};
  background-color: ${({ backgroundColor }) => backgroundColor ?? null};
  background: ${({ background }) => background ?? null};
  ${({ backgroundImage }) =>
    backgroundImage
      ? css`
          background-image: ${backgroundImage};
          background-size: cover;
        `
      : null};
  background-repeat: ${({ backgroundRepeat }) => backgroundRepeat ?? null};
  background-position: ${({ backgroundPosition }) =>
    backgroundPosition ?? null};
  background-size: ${({ backgroundSize }) => backgroundSize ?? null};
  ${size.tabletMin} {
    background-attachment: ${({ backgroundAttachment }) =>
      backgroundAttachment ?? null};
    padding-top: ${({ paddingTopTab }) => paddingTopTab ?? null};
    padding-bottom: ${({ paddingBottomTab }) => paddingBottomTab ?? null};
  }

  ${size.desktop} {
    padding-top: ${({ paddingTopDesk }) => paddingTopDesk ?? null};
    padding-bottom: ${({ paddingBottomDesk }) => paddingBottomDesk ?? null};
  }
`;
