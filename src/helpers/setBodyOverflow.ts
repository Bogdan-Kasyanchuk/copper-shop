const setBodyOverflow = (isBurgerMenuShow: boolean): void => {
  if (isBurgerMenuShow) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
};

export default setBodyOverflow;
