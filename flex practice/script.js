// Selectors
const container = document.querySelector('.container');
const addBttn = document.querySelector('.add-button');
const addBttnDiv = document.querySelector('.add-card');
const lorem = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, quod iusto. Repellat quod, esse maxime sequi in reiciendis repudiandae, explicabo ducimus, ratione doloribus ullam id qui illo numquam illum ad."

// EVENT HANDLERS
addBttn.addEventListener('click', addCard)

// FUNCTIONS

function addCard(){
    
    // new item div
    const newItem = document.createElement('div');
    newItem.classList.add("items", "jsCard");
    container.appendChild(newItem);
    container.insertBefore(newItem, addBttnDiv);
    
    // h2
    const itemHeader = document.createElement('h2');
    itemHeader.innerText = "Card";
    newItem.appendChild(itemHeader);

    // p
    const p = document.createElement('p');
    p.innerText = lorem;
    newItem.appendChild(p);
}