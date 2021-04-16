const renderContact = () => {
  const display = document.querySelector('#display');
  display.className = '';
  display.classList.add('contact');
  display.innerHTML = '';

  const number = document.createElement('p');
  number.textContent = '+1 323 891 8061';
  display.appendChild(number);

  const address = document.createElement('p');
  address.innerHTML =
    '1406 Meadowbrook Mall Road,<br> Los Angeles,<br> CA 90024';
  display.appendChild(address);
};

export default renderContact;
