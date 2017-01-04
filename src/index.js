const button = document.createElement('button')
button.innerText = 'fetch';

button.onclick = () => {
  System.import('src/image').then(module => {
    module.default();
  });
};

document.body.appendChild(button);
