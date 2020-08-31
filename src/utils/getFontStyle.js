import theme from '../config/theme';

export default function getFontStyle(size){
  return theme.text[size] || {
    size,
    height: '1.5em'
  };
}
