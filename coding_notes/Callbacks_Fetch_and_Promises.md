## Asynchronous JavaScript

Functions running in parallel with other functions are called asynchronous.

Synchronous programming would be waiting until a function is completely finished before moving onto the next. JavaScript utilises asynchronous callback functions to have multiple operations running at the same time.

</br>

### AJAX

AJAX stands for Asynchronous JavaScript and XML, and it allows web pages to be updated asynchronously by exchanging data with a web server while the app is running. 

In short, it essentially means that you can update parts of a web page without reloading the whole page (the URL stays the same).

</br>

## How the browser loads JavaScript 

- When the browser runs, it reads the index.html file, from top to bottom 
- When it gets to the script tag on the index.html file it goes to the index.js file attached 
- it then reads through the code in the index.js file
- if it comes across any async code like the setTimeoutMethod, it adds them to the **event queue**
- When it is done reading the rest of the code and the rest of the index.html file 
- it checks the event queue and checks if the setTimeoutMethod is ready to be executed in terms of the delay and then it executes it if ready

</br>

## Using fetch 

Fetch is used to get data from an external location eg another server. It makes HTTP requests to a server.

```For each request, it creates a Promise which must be resolved in order to define the content type and access the data.```

**Fetch request by default is a GET request (asking for data).**

You can also use it for a **POST request (submitting data)**

- When you run a fetch request, the response is a **Response Object** 
- Running a fetch request also returns a Promise

</br>

### Explaining how fetch works 

- The ```fetch()``` method returns a ```Promise``` that resolves the ```Response Object``` from the request to show the status (successful or not)

So when using fetch we,
- first define the path **(Fetch)**
- then we request the data from the server **(Request)**
- lastly we access the data **(Response)**

e.g of a fetch request for json data
```js 
// Basic blueprint
fetch(url)
  .then(response.something) // Define response type (JSON, Headers, Status codes)
  .then(data) // get the response type 


// Practical example
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => console.log(JSON.stringify(data)))
```

</br>

### .then
- the then method adds the code to the event queue to be executed when the promise is resolved (or successful)
- In plain english, this adds the code to the event queue so it waits until a response has been given (for example the data we requested) before it will be evaluated 
- the then method also returns a new promise 


</br>

## Using addEventListener 

```js
 const button = document.querySelector('#helloButton");
 
 button.addEventListener('click', clickedButton() { 
  console.log('You have submitted the form');
 }
```

When we use addEventListener, we add the function code to the event queue, in the mean-time we are listening/looking out for an event (e.g. click).

When this event occurs (e.g. the button is clicked), then the function passed will be executed. 


</br>

#### setTimeout()
When using the JavaScript function setTimeout(), 
you can specify a callback function to be executed on time-out:
```js 
// setTimeout takes in two arguments, a callback function and a timer in milliseconds
setTimeout(myFunction, 3000); // this means that myFunction has a 3 seconds delay

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
```

**In the example above, myFunction is used as a callback.**

The function (the function name) is passed to setTimeout() as an argument.

3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds.

</br>


### Callback functions 
A callback is a function passed as an argument to another function.

A callback function can run after another function has finished.

e.g 
```js 
function print(callback) {
    callback();
}
```

</br>

### Promise Object Properties

A Promise is a way to deal with asynchronous code, if a condition is met the promise will be resolved otherwise it will be rejected.

A JavaScript Promise object can be:


**Pending**

While a Promise object is "pending" (working), the result is undefined.

- The pending state is the initial state of a promise

</br>

**Resolved**

When a Promise object is "resolved", the result is a value.

- This means the promise has completed successfully **(.then method)**

</br>

**Rejected**

When a Promise object is "rejected", the result is an error object.

- This means the promise has failed **(.catch method)**


</br>


#### Creating a promise 

```js 
const myPromise = new Promise((resolve, reject);
  let connection = true;
  
  if(connection) {
     resolve('Connection established');
  } else {
     reject('Connection refused');
  }
});

// for resolved and rejected promises
myPromise
.then((message) => {
  console.log(message);
.catch((message) => {
  console.log(message);
}); 

```

</br>

### Async/Await 
async makes a function return a Promise

await makes a function wait for a Promise

</br> 


