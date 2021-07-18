function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": 'application/json',
      "Accept": 'application/json',
    },
    body: JSON.stringify({ name, email })
  }).then(res => res.json())
    .then(data => {
      const id = data.id;
      const docBody = document.querySelector('body');
      const newIdElement = document.createElement('p');
      newIdElement.innerHTML = id;
      docBody.appendChild(newIdElement);
    })
    .catch(err => {
      const message = err.message;
      const docBody = document.querySelector('body');
      const newErrorElement = document.createElement('p');
      newErrorElement.innerHTML = message;
      docBody.appendChild(newErrorElement)
    })
}