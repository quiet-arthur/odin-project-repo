const container = document.querySelector('#container');
const btn = document.querySelector('#btn');

const button = document.querySelectorAll('button');
button.forEach((button) => {
    button.addEventListener('click', () => {
        button.setAttribute('style', 'background: pink; border: 2px solid black;');
    })
})



const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


const para = document.createElement('p')
para.style.color = 'red';
para.textContent = "Hi, I'm red!"

container.appendChild(para);


const h3subTitle = document.createElement('h3');
h3subTitle.style.color = 'blue';
h3subTitle.textContent = "Hi, I'm a blue h3!"

container.appendChild(h3subTitle);


const div = document.createElement('div');
div.setAttribute('style', 'border: 2px solid black; background: pink;');

const h1ForDiv = document.createElement('h1');
h1ForDiv.textContent = "I'm in a div!";
div.appendChild(h1ForDiv);

const paraForDiv = document.createElement('p');
paraForDiv.textContent = "Me too!";
div.appendChild(paraForDiv);

container.appendChild(div); 
