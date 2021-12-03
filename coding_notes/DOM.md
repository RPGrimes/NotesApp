## DOM 

### Examining the document object 
```js 
console.dir(document);
```

### Examining different document properties and methods 
```js 
console.log(document.body); // prints out everything in the body of page
console.log(document.doctype); // prints out the doctype of page 
console.log(document.all); // prints out all elements in the page
console.log(document.all[10]); // prints out all elements with an index of 10
console.log(document.forms); // prints out the forms in the page 
console.log(document.images); // prints out the images in the page 
```
</br>

### Selectors 

#### GetElementbyID 
```js 
console.log(document.getElementsById('header-title')); // prints elements with an id of header-title

// setting the value to a variable
let headerTitle = document.getElementsById('header-title');
console.log(headerTitle);

// changing the text of element
headerTitle.textContent = "Hello"; // Changes text to Hello
headerTitle.innerText = "Goodbye"; // Changes text to Goodbye
headerTitle.innerHTML = "<h3>Hello</h3>"; // Adds an h3 element that says Hello into the header-title element

// changing the styling of element
headerTitle.style.borderBottom = "solid 3px #000"; // Adds a black bottom border
headerTitle.style.color = "red"; // Changes the color to red 
```


#### GetElementsByClassName
```js 
let items = document.getElementsByClassName('list-group-item');
console.log(items);

// To access each element in the class 
console.log(items[1]); // prints out the second element in the class of items 
items[1].textContent = "Hello 2";
items[1].style.backgroundColor = "yellow";

// To change all the elements in the class - you have to loop through them 
for(let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "yellow";
}
```


#### GetElementsbyTagName
```js 
let li = document.getElementsByTagName('li');
console.log(li);

// works in the same way as getElementsByClassName 
console.log(li[1]);
```


#### querySelector
```js 
// You can use any css selector ('#id', '.className', 'tag')
let header = document.querySelector('#main-header');
```


#### querySelectorAll
```js 
let titles = document.querySelector('.title');

console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
  odd[i].style.backgroundColor = '#f4f4f4';
  even[i].style.backgroundColor = '#ccc';
}
```

#### createElement 
```js 
// Creating a new div 
const newDiv = document.createElement('div');

// Adding a class to the div 
newDiv.className = 'hello'

// Adding id
newDiv.id = 'hello1'

// Adding attribute
newDiv.setAttribute('title', 'Hello Div');

// Create text node 
const newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText); 

// Adding the div to the browser DOM 
const container = document.querySelector('header .container'); // creates a container that selects the header and the container class

const h1 = document.querySelector('header h1'); // creates a h1 that selects the header and h1 element 

container.insertBefore(newDiv, h1); //inserts the newDiv before the h1 element
```

#### parentNode 
```js 
let itemList = document.querySelector('#items');

console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4' // changes the background color of the parent element 
```


#### parentElement
```js 
// Works the same as parentNode, can be used interchangeably 
console.log(itemList.parentElement);
```


#### childNodes
```js 
// also prints out all the line breaks and white space as well as the elements
console.log(itemList.childNodes); // prints out an array of all the children elements
```


#### children
```js 
// works the same as childNodes but better to use
console.log(itemList.children);
```

#### firstChild
```js 
console.log(itemList.firstChild); // prints out line breaks 
```

#### firstElementChild
```js 
// works the same as firstChild better to use
console.log(itemList.firstElementChild); // prints out the first child element 
```

#### lastChild and lastElementChild
```js 
// would print out the last child element
```

</br>

### Events

#### addEventListener
```js 
Syntax
// it takes two arguments, the name of the event we want to 'listen' to, and the callback function to execute when this event is triggered at a later point in the future
target.addEventListener(type, listener);

// selecting the button and adding a event listener that when clicked, it prints "Button clicked"
const button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(){
  console.log('Button clicked');
}
```

#### 
```js 

```

#### 
```js 

```
