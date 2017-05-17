// Closures - function body has access to variables that are defined outside the function

// function will have access to requestID even this callback is executed later
function sendRequest() {
  var requestID = '123';
  $.ajax({
    url: '/myUrl',
    success: function(response) {
      alert('Request ' + requestID + ' returned');
    }
  });
}

// Example 2
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();

