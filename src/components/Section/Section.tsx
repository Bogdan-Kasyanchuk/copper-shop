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
      backgroundImageMob={backgroundImage?.mob as string}
      backgroundImageTab={backgroundImage?.tab as string}
      backgroundImageDesk={backgroundImage?.desk as string}
      backgroundRepeatMob={backgroundRepeat?.mob as string}
      backgroundRepeatTab={backgroundRepeat?.tab as string}
      backgroundRepeatDesk={backgroundRepeat?.desk as string}
      backgroundPositionMob={backgroundPosition?.mob as string}
      backgroundPositionTab={backgroundPosition?.tab as string}
      backgroundPositionDesk={backgroundPosition?.desk as string}
      backgroundSizeMob={backgroundSize?.mob as string}
      backgroundSizeTab={backgroundSize?.tab as string}
      backgroundSizeDesk={backgroundSize?.desk as string}
      backgroundAttachmentMob={backgroundAttachment?.mob as string}
      backgroundAttachmentTab={backgroundAttachment?.tab as string}
      backgroundAttachmentDesk={backgroundAttachment?.desk as string}
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
  backgroundImageMob: string;
  backgroundImageTab: string;
  backgroundImageDesk: string;
  backgroundRepeatMob: string;
  backgroundRepeatTab: string;
  backgroundRepeatDesk: string;
  backgroundPositionMob: string;
  backgroundPositionTab: string;
  backgroundPositionDesk: string;
  backgroundSizeMob: string;
  backgroundSizeTab: string;
  backgroundSizeDesk: string;
  backgroundAttachmentMob: string;
  backgroundAttachmentTab: string;
  backgroundAttachmentDesk: string;
}>`
  position: relative;
  padding-top: ${({ paddingTopMob }) => paddingTopMob ?? null};
  padding-bottom: ${({ paddingBottomMob }) => paddingBottomMob ?? null};
  color: ${({ color }) => color ?? null};
  background-color: ${({ backgroundColor }) => backgroundColor ?? null};
  background: ${({ background }) => background ?? null};
  ${({ backgroundImageMob }) =>
    backgroundImageMob
      ? css`
          background-image: ${backgroundImageMob};
          background-size: cover;
        `
      : null};
  background-repeat: ${({ backgroundRepeatMob }) =>
    backgroundRepeatMob ?? null};
  background-position: ${({ backgroundPositionMob }) =>
    backgroundPositionMob ?? null};
  background-size: ${({ backgroundSizeMob }) => backgroundSizeMob ?? null};
  background-attachment: ${({ backgroundAttachmentMob }) =>
    backgroundAttachmentMob ?? null};

  ${size.tabletMin} {
    padding-top: ${({ paddingTopTab }) => paddingTopTab ?? null};
    padding-bottom: ${({ paddingBottomTab }) => paddingBottomTab ?? null};
    background: ${({ background }) => background ?? null};
    ${({ backgroundImageTab }) =>
      backgroundImageTab
        ? css`
            background-image: ${backgroundImageTab};
            background-size: cover;
          `
        : null};
    background-repeat: ${({ backgroundRepeatTab }) =>
      backgroundRepeatTab ?? null};
    background-position: ${({ backgroundPositionTab }) =>
      backgroundPositionTab ?? null};
    background-size: ${({ backgroundSizeTab }) => backgroundSizeTab ?? null};
    background-attachment: ${({ backgroundAttachmentTab }) =>
      backgroundAttachmentTab ?? null};
  }

  ${size.desktop} {
    padding-top: ${({ paddingTopDesk }) => paddingTopDesk ?? null};
    padding-bottom: ${({ paddingBottomDesk }) => paddingBottomDesk ?? null};
    background: ${({ background }) => background ?? null};
    ${({ backgroundImageDesk }) =>
      backgroundImageDesk
        ? css`
            background-image: ${backgroundImageDesk};
            background-size: cover;
          `
        : null};
    background-repeat: ${({ backgroundRepeatDesk }) =>
      backgroundRepeatDesk ?? null};
    background-position: ${({ backgroundPositionDesk }) =>
      backgroundPositionDesk ?? null};
    background-size: ${({ backgroundSizeDesk }) => backgroundSizeDesk ?? null};
    background-attachment: ${({ backgroundAttachmentDesk }) =>
      backgroundAttachmentDesk ?? null};
  }
`;
