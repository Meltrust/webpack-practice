import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Helss4lo', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
