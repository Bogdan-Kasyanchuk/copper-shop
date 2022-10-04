import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
// import { firstColor, secondColor, accentColor, bgColor } from './variables';

const GlobalStyles = createGlobalStyle`
${normalize}

*,
*::before,
*::after {
  box-sizing: border-box;
}

*, 
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  border: 0;
}

html,
body {
  height: 100%;
}

body {
  font-family: 'Open Sans', sans-serif;
  /* font-size: 16px;
  color: #fff;
  line-height: 1;
  background-color: #fff;
  background-image: url('https://www.transparenttextures.com/patterns/inspiration-geometry.png'); */

/* font-family: 'Playfair Display', serif; */
}

h1,
h2,
h3,
h4,
h5,
h6
button,
input,
textarea {
  font-weight: inherit;
  font-size: inherit;
}

ul {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

button,
input,
textarea {
  font-family: inherit;
}

button,
label,
input[type="checkbox"] {
  cursor: pointer;
}

a {
  display: inline-block;
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
