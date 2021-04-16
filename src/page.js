const renderPage = () => {
  const content = document.querySelector('#content');

  const image = document.createElement('div');
  image.classList.add('image');
  content.appendChild(image);

  const main = document.createElement('div');
  main.classList.add('main');
  content.appendChild(main);

  const header = document.createElement('header');
  main.appendChild(header);

  const section = document.createElement('section');
  section.setAttribute('id', 'display');
  main.appendChild(section);
};

export default renderPage;
