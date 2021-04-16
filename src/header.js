const renderHeader = () => {
  const header = document.querySelector('header');

  const nav = document.createElement('nav');
  header.appendChild(nav);

  const menu = document.createElement('button');
  menu.textContent = 'Menu';
  nav.appendChild(menu);

  const contact = document.createElement('button');
  contact.textContent = 'Contact';
  nav.appendChild(contact);

  const about = document.createElement('button');
  about.textContent = 'About';
  nav.appendChild(about);

  const logo = document.createElement('div');
  logo.classList.add('logo');
  header.appendChild(logo);
};

export default renderHeader;
