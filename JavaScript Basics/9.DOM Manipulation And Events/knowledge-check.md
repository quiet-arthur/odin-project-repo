# DOM Manipulation and Events
## What is the DOM?
    DOM is a work tree with access to all the elements of a webpage
## How do you target the nodes you want to work with?
    Using 'document.querySelector('element')';
## How do you create an element in the DOM?
    Using 'document.createElement('tagName')';
## How do you add an element to the DOM?
    Using 'parentNode.appendChild(childNode)';
## How do you remove an element from the DOM?
    Using 'parentNode.removeChild(childNode)';
## How can you alter an element in the DOM?
    Using 'theNode.style.color = 'blue'; // adds the indicate .style.
    Or    'theNode.style.cssText = 'background: red' // adds a style property 
    OR    'theNode.setAttribute('style', 'color: blue; background: white; border: 1px solid black;') // adds more than one style property
## When adding text to a DOM element, should you use textContent or innerHTML? Why?
    You should theNode.textContent cause it'd be represent in the DOM only as a text, while .theNode.innerHTML could be miss-read by the browser and turn out the Node sensitive to other' inputs

## Where should you include your JavaScript tag in your HTML file when working with DOM nodes?
    You could use <script> scr="" defer </script> in the <head> section or bellow the HTML code as <script> scr="" </script>

## How do “events” and “listeners” work?
    When adding an event listener to a Node the 'listener' waits until that 'event' is lisente/executed in the code, so a block of code is run after that 

## What are three ways to use events in your code?
    <button onclick="alert('Hello World')">Click Me</button> // Adding directly in the HTML file
    
    --------------------------------------------------------------------------------------------
    <button id="btn">Click Me</button>
    const btn = document.querySelector('#btn');
    btn.onclick = () => alert("Hello World"); // Using a property directly on the Node
    
    --------------------------------------------------------------------------------------------
    <button id="btn">Click Me Too</button>
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
        alert("Hello World");
    }); // Adding a theNode.addEventListener('event' callbackFn) to it

## Why are event listeners the preferred way to handle events?
    Because you could use it listen to various Nodes at the same time
## What are the benefits of using named functions in your listeners?
    It makes the code cleaner and make you able to use the function in multiple spaces
## How do you attach listeners to groups of nodes?
    const theNodes = document.querySelectorAll('selector'); 
    theNodes.forEach((node) => {
        node.addEventListener('event', callbackFn)
    })
## What is the difference between the return values of querySelector and querySelectorAll?
    The 'document.querySelector('selector')' returns the value of the first selector match in the code. While 'document.querySelectorAll('selector')' returns a nodeList of all the matches
## What does a “nodelist” contain?
    A list of the selected Nodes.
## Explain the difference between “capture” and “bubbling”.
    Capture is what the DOM found until the node who triggered the event is reached. While bubbling is what the DOM do to every element founded(ancestors and parents) until it reaches the root