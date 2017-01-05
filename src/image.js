import './image.css';

import imgSrc from 'assets/images/city.jpeg';

const image = document.createElement('img');
image.src = imgSrc;

export default () => {
  document.body.appendChild(image);
};
