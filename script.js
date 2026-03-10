// time to javascript W
const CardClasses = ["dwarf", "elf", "human", "orc", "mage", "dictator"];

const characters = [
    {
        name: "Maurice",
        health: 100,
        attack: 20,
        class: "dwarf"
    },
    {
        name: "Finn",
        health: 120,
        attack: 30,
        class: "orc"
    },
    {
        name: "Louis",
        health: 120,
        attack: 20,
        class: "human"
    },
    {
        name: "Jidske",
        health: 120,
        attack: 25,
        class: "dictator"
    }
];

function displayCharactersList() {
    const container = document.getElementById("characters-list");
    container.innerHTML = "";
    const divInfoContainer = document.createElement("div");
    divInfoContainer.className = "info-container";
    for(var i=0; i<characters.length; i++){
        const pName = document.createElement("p");
        pName.className = "name";
        const spanNameLabel = document.createElement("span");
        spanNameLabel.textContent = "Name: ";
        const spanNameValue = document.createElement("span");
        spanNameValue.className = "name-value";
        spanNameValue.textContent = characters[i].name;
        pName.appendChild(spanNameLabel);
        pName.appendChild(spanNameValue);
        const deleteButton = document.createElement("button");
        deleteButton.className = "deletebutton";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", (function(index) {
            return function() {
                DeleteCharacter(index);
            };
        })(i));
        pName.appendChild(deleteButton);    
        divInfoContainer.appendChild(pName);
        container.appendChild(divInfoContainer);
        divInfoContainer.appendChild(pName);
        container.appendChild(divInfoContainer);
    }
}

document.addEventListener("DOMContentLoaded", function(){
	displayCharactersList();
}); 

let NewCardHealth = null;
let NewCardAttack = null;

/* document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("button");
    
    CardClasses.forEach(function(CardClass) {
        const buttonDiv = document.createElement("div");
        buttonDiv.innerHTML = CardClass;
        container.appendChild(buttonDiv);
    });
}); 
deze function was niet tuff
waarom bewaar ik hem zelf nog?
*/

function CreateCard() {
    const container = document.getElementById("CardList");
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.innerHTML = `
        <h1>Card Name</h1>
        <p>Health: ${NewCardHealth}</p>
        <p>Attack: ${NewCardAttack}</p>
    `;
    const deleteButton = document.createElement("button");
    deleteButton.className = "deletebutton";
    deleteButton.textContent = "Delete Card";
    deleteButton.addEventListener("click", function() {
        container.removeChild(cardDiv);
    });
    cardDiv.appendChild(deleteButton);
    container.appendChild(cardDiv);
}

function CreateCharacter() {
    const name = prompt("Enter character name:");
    if (!name) return;
    
    const health = prompt("Enter health:");
    if (!health) return;
    
    const attack = prompt("Enter attack:");
    if (!attack) return;
    
    const classPrompt = "Select a class:\n1. dwarf\n2. elf\n3. human\n4. orc\n5. mage\n6. dictator";
    const classIndex = prompt(classPrompt);
    if (!classIndex) return;
    
    const newCharacter = {
        name: name,
        health: parseInt(health),
        attack: parseInt(attack),
        class: CardClasses[parseInt(classIndex) - 1]
    };
    
    characters.push(newCharacter);
    displayCharactersList();
}

function DeleteCharacter(index) {
    characters.splice(index, 1);
    displayCharactersList();
}
