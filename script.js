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