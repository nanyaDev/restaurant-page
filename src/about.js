const renderAbout = () => {
  const display = document.querySelector('#display');
  display.className = '';
  display.classList.add('about');
  display.innerHTML = '';

  const about = document.createElement('p');
  about.innerHTML =
    '美味しいお寿司が食べたいなら、<br> ここには来ない方がいい。';
  display.appendChild(about);
};

export default renderAbout;
