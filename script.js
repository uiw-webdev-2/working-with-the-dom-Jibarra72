/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import PineTree from "./PineTree.js";

const Tree = new PineTree(
  'PineTree.jpg',
  'Pine',
  'Brown',
  '30 feet',
  '2 feet',
  false,
);

const content = `
     <figure class="PineTree__image">
       <img src=${Tree.image} alt="" />
     </figure>
     <h1 class=""></h1>
     <ul class="PineTree__features">
     <li>Type: ${Tree.type}<li>
     <li>Color: ${Tree.color}<li>
     <li>Height: ${Tree.height}<li>
     <li>Width: ${Tree.width}<li>     
     <li>Does it produce pinecones?: ${Tree.pinecone}<li>
     </ul>
   </article>
 `;

const main = document.querySelector(".maincontent");


const newArticle = document.createElement('article');
newArticle.classList.add('PineTree');
newArticle.setAttribute('id','Green');
newArticle.innerHTML = content;

main.append(newArticle);

//main.innerHTML = content;



// const listItem = document.querySelector("ul li:first-child");

// listItem.classList.toggle("webdev");

// const backpackTitle = document.querySelector('h1').className;
// document.querySelector('img').setAttribute('alt', backpackTitle);
