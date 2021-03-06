import { injectGlobal } from 'styled-components';
// import { reactSlick, reactSlickTheme } from '../../../libs/react-slick';
// import HarborIcon from '../libs/ruucm-blocks/fonts/HarborIcon';

// App Styles
injectGlobal`
  #root {
      max-width: 375px;
      margin: 150px auto;
      border-radius: 10px;
      position:relative;
      background: white;
      // Box Shadow
      -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset;
      -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset; 
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset;
  }

  .home {
      padding: 0 20px;
  }
  * {
      font-family: 'NanumSquare' !important;
  }
  h1, h2, h3, h4, h5 {
      font-family: 'NanumSquare';
      font-weight: 700;
  }
  p, span {
      font-family: 'NanumSquare';
  }
  .app {
      position: relative;
      height: 80vh;
  }
  /* On screens that are 600px or less, set the background color to olive */
  @media screen and (max-width: 600px) {
    #root {
        margin-top: 0;
        margin-bottom: 0;
        max-width: 100vw;
        border-radius: 0;
    }
    .app {
        height: initial;
        min-height: 100vh;
    }
  }
`;
