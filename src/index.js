import renderMenu from './menu';
import renderHeader from './header';
import renderPage from './page';
import renderContact from './contact';
import renderAbout from './about';

renderPage();
renderHeader();
renderMenu();

const buttons = document.querySelectorAll('nav > button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const text = e.target.textContent;

    if (text === 'Menu') renderMenu();
    if (text === 'Contact') renderContact();
    if (text === 'About') renderAbout();
  });
});
