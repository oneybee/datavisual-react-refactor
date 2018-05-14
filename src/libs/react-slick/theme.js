import { css } from 'styled-components';
import media from '../ruucm-blocks/tools/media'

const reactSlickTheme = css`
  /* Slider */

  .slick-loading .slick-list {
    background: #fff url('components/react/slick/ajax-loader.gif') center center no-repeat;
  }

  /* Icons */
  /* @font-face {
    font-family: 'slick';
    font-weight: normal;
    font-style: normal;
    src: url('components/react/slick/fonts/slick.eot');
    src: url('components/react/slick/fonts/slick.eot?#iefix') format("embedded-opentype"), url('components/react/slick/fonts/slick.woff') format("woff"), url('components/react/slick/fonts/slick.ttf') format("truetype"), url('components/react/slick/fonts/slick.svg#slick') format("svg");
  }
 */

  /* Arrows */

  .slick-prev, .slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }

  .slick-prev {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    margin-left: 120px;
    margin-top: 15px;
    &:hover, &:focus {
      color: transparent;
      outline: none;
      background: transparent;
    }
    ${media.phone`
      margin-left: 23px;
    `}
  }

  .slick-next {
    margin-right: 120px;
    &:hover, &:focus {
      color: transparent;
      outline: none;
      background: transparent;
    }
    ${media.phone`
      margin-right: 23px;
    `}
  }

  .slick-prev {
    &:hover:before, &:focus:before {
      opacity: 1;
    }
  }

  .slick-next {
    &:hover:before, &:focus:before {
      opacity: 1;
    }
  }

  .slick-prev.slick-disabled:before, .slick-next.slick-disabled:before {
    opacity: .25;
  }

  .slick-prev:before, .slick-next:before {
    font-family: 'harbor';
    font-size: 45px;
    line-height: 1;
    opacity: .75;
    color: #071A52;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    left: 0;
    z-index: 999;
  }

  [dir='rtl'] .slick-prev {
    right: -25px;
    left: auto;
  }

  .slick-prev:before {
    content: '←';
  }

  [dir='rtl'] .slick-prev:before {
    /* content: '→'; */
    content: "\e919";
    color: #071a52;
  }

  .slick-next {
    right: 0;
    z-index: 999;
  }

  [dir='rtl'] .slick-next {
    right: auto;
    left: -25px;
  }

  .slick-next:before {
    /* content: '→'; */
    content: "\e919";
    color: #071a52;
  }

  [dir='rtl'] .slick-next:before {
    content: '←';
  }

  /* Dots */

  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    margin-bottom: 30px;
    list-style: none;
    text-align: center;
    li {
      position: relative;
      display: inline-block;
      width: 20px;
      height: 20px;
      margin: 0 5px;
      padding: 0;
      cursor: pointer;
      button {
        font-size: 0;
        line-height: 0;
        display: block;
        width: 20px;
        height: 20px;
        padding: 5px;
        cursor: pointer;
        color: transparent;
        border: 0;
        outline: none;
        background: transparent;
        &:hover, &:focus {
          outline: none;
        }
        // &:hover:before, &:focus:before {
        //   opacity: 1;
        // }
        &:before {
          font-family: 'slick';
          font-size: 14px;
          line-height: 20px;
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          content: '•';
          text-align: center;
          opacity: 0.2;
          color: #2F2C3D;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      }
      &.slick-active button:before {
        opacity: 1 !important;
        color: #F3A536 !important;
      }
    }
  }
`

export default reactSlickTheme;
