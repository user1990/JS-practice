'use strict';

// Promise is used for asynchronous computations. Represents a value which may be available now, or in the future, or never.
// Example - Fetch data from API
function getData(method, url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusTxt: xhr.statusText
        });
      }
    };
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusTxt: xhr.statusText
      });
    };
    xhr.send();
  });
}

getData('GET', 'https://jsonplaceholder.typicode.com/todos').then(function(data) {
  let todos = JSON.parse(data);
  let output = '';
  for (let todo of todos) {
    output += `
      <li>
        <h3>${todo.title}</h3>
        <p>Completed: ${todo.completed}</p>
      </li>
    `;
  }

  document.getElementById('template').innerHTML = output;
}).catch(function(err) {
  console.log(err);
});

