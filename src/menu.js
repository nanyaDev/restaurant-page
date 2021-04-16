const menu_items = [
  ['鮪', 'Tuna'],
  ['本鮪', 'Bluefin Tuna'],
  ['鮭', 'Salmon'],
  ['間八', 'Amberjack'],
  ['蟹', 'Snow Crab'],
  ['海老', 'Shrimp'],
  ['蛸', 'Octopus'],
  ['鰻', 'Eel'],
  ['烏賊', 'Squid'],
  ['海胆', 'Sea Urchin'],
  ['貝柱', 'Scallop'],
  ['卵', 'Egg'],
];

const renderMenu = () => {
  const display = document.querySelector('#display');
  display.className = '';
  display.classList.add('menu');
  display.innerHTML = '';

  menu_items.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('item');

    const h2 = document.createElement('h2');
    h2.textContent = item[0];
    div.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = item[1];
    div.appendChild(p);

    display.appendChild(div);
  });
};

export default renderMenu;
