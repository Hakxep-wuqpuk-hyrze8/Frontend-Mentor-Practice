import { createGlobalStyle } from "styled-components";
import { theme } from './theme';

/**
  * CSS 屬性排序
  * class {
  *  Position
  *  flex or grid
  *  box modal
  *  color and style 
  *  text
  *  other
  * }
 */

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  body {
    font-family: ${theme.fonts.family};
    font-size: ${theme.fonts.baseSize};
    font-weight: ${theme.fonts.weight};
    line-height: ${theme.fonts.lineHeight};
    letter-spacing: ${theme.fonts.letterSpacing};
  }

  p {
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight};
    line-height: ${theme.fonts.lineHeight};
    text-transform: capitalize;
    letter-spacing: ${theme.fonts.letterSpacing};
  }

  h1 {
    font-size: 3.052rem;
  }

  h2 {
    font-size: 2.441rem;
  }

  h3 {
    font-size: 1.953rem;
  }

  h4 {
    font-size: 1.563rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }

  img,
  video,
  iframe {
    max-inline-size: 100%;
    block-size: auto;
    object-fit: cover;
  }

  .unselected {
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }

  .text {
    margin-bottom: 1.5rem;
    max-width: 40em;
  }

  small,
  .text-small {
    font-size: 0.875rem;
  }

  .extra-small-text {
    font-size: 0.7em;
  }
`

export default GlobalStyle;