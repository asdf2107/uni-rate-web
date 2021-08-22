const baseAddresses = ['https://localhost:44314'];
const waitForServerResponseMs = 5000;
const networkError = 'Network error! The server may be offline or you are having connection problems. Please check your internet connection and try reloading the page.';

async function getData(url = '') {
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors',
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function getDataAll(urlPart, callback) {
  let success = false;

  for (const address of baseAddresses) {
    getData(address + urlPart)
    .then(resData => {
      if (!success) {
        success = true;
        callback(resData.payload);
      }
    })
    .catch(err => { setTimeout(() => {
        if (!success) error(networkError);
      }, waitForServerResponseMs); 
    });
  }
}

function postDataAll(urlPart, data, callback) {
  let success = false;

  for (const address of baseAddresses) {
    postData(address + urlPart, data)
    .then(() => {
      if (!success) {
        success = true;
        callback();
      }
    })
    .catch(err => { setTimeout(() => {
        if (!success) error(networkError);
      }, waitForServerResponseMs); 
    });
  }
}

function error(message) {
  const body = document.body;

  body.innerHTML = '';
  const el = document.createElement('p1');
  el.className = 'error-text';

  const text = document.createTextNode(message);
  el.appendChild(text);
  body.appendChild(el);
}

export { getDataAll, postDataAll };