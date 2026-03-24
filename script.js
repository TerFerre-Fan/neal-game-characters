// time to javascript W
const CardClasses = ["dwarf", "elf", "human", "orc", "mage", "dictator"];

const characters = [
    {
        name: "Maurice",
        health: 100,
        attack: 20,
        class: "dwarf",
        Image: <img src='neal-game-characters/donck.png' alt='Maurice'> </img>
    },
    {
        name: "Finn",
        health: 120,
        attack: 30,
        class: "orc",
        Image: ""
    },
    {
        name: "Louis",
        health: 120,
        attack: 20,
        class: "human",
        Image: ""
    },
    {
        name: "Jidske",
        health: 120,
        attack: 25,
        class: "dictator",
        Image: ""
    }
];

function displayCharactersList() {
    const container = document.getElementById("characters-list");
    container.innerHTML = "";
    const divInfoContainer = document.createElement("div");
    divInfoContainer.className = "info-container";
    for(var i=0; i<characters.length; i++){

        const pCharacter = document.createElement("p");
        pCharacter.className = "character";
        divInfoContainer.appendChild(pCharacter);

        const pName = document.createElement("p");
        pName.className = "name";
        const spanNameLabel = document.createElement("span");
        spanNameLabel.textContent = "Name: ";
        const spanNameValue = document.createElement("span");
        spanNameValue.className = "name-value";
        spanNameValue.textContent = characters[i].name;
        pName.appendChild(spanNameLabel);
        pName.appendChild(spanNameValue);
        pCharacter.appendChild(pName);

        const pHealth = document.createElement("p");
        pHealth.className = "health";
        const spanHealthLabel = document.createElement("span");
        spanHealthLabel.textContent = "Health: ";
        const spanHealthValue = document.createElement("span");
        spanHealthValue.className = "health-value";
        spanHealthValue.textContent = characters[i].health;
        pHealth.appendChild(spanHealthLabel);
        pHealth.appendChild(spanHealthValue);
        pCharacter.appendChild(pHealth);

        const pAttack = document.createElement("p");
        pAttack.className = "attack";
        const spanAttackLabel = document.createElement("span");
        spanAttackLabel.textContent = "Attack: ";
        const spanAttackValue = document.createElement("span");
        spanAttackValue.className = "attack-value";
        spanAttackValue.textContent = characters[i].attack;
        pAttack.appendChild(spanAttackLabel);
        pAttack.appendChild(spanAttackValue);
        pCharacter.appendChild(pAttack);

        const pClass = document.createElement("p");
        pClass.className = "class";
        const spanClassLabel = document.createElement("span");
        spanClassLabel.textContent = "Class: ";
        const spanClassValue = document.createElement("span");
        spanClassValue.className = "class-value";
        spanClassValue.textContent = characters[i].class;
        pClass.appendChild(spanClassLabel);
        pClass.appendChild(spanClassValue);
        pCharacter.appendChild(pClass);
 
        const pImage = document.createElement("p");
        pImage.className = "image";
        const spanImageView = document.createElement("span");
        spanImageView.className = "image-value";
        spanImageView.innerHTML = `<file src="${characters[i].Image}" alt="${characters[i].name}" style="width: 100px; height: 100px;">`;
        pImage.appendChild(spanImageView);
        pCharacter.appendChild(pImage);
        
        const deleteButton = document.createElement("button");
        deleteButton.className = "deletebutton";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", (function(index) {
            return function() {
                DeleteCharacter(index);
            };
        })(i));
        pCharacter.appendChild(deleteButton);
        
        divInfoContainer.appendChild(pCharacter);
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

deze was wel tuff :( */

/*function CreateCharacter() {
    const name = prompt("Enter character name:");
    if (!name) return;
    
    const health = prompt("Enter health:");
    if (!health) return;
    
    const attack = prompt("Enter attack:");
    if (!attack) return;
    
    const classIndex = prompt("Select a class:\n1. dwarf\n2. elf\n3. human\n4. orc\n5. mage\n6. dictator");
    if (!classIndex) return;

    const image = prompt("Submit an image file:");
    if (!image) return;
    
    const newCharacter = {
        name: name,
        health: parseInt(health),
        attack: parseInt(attack),
        class: CardClasses[parseInt(classIndex) - 1],
        Image: image
    };
    
    characters.push(newCharacter);
    displayCharactersList();
}
*/

function SubmitCharacter() {
    const nameInput = document.getElementById("nameInput").value;
    const healthInput = document.getElementById("healthInput").value;
    const attackInput = document.getElementById("attackInput").value;
    const classSelect = document.getElementById("classInput").value;
    const imageInput = document.getElementById("imageInput").src;

    characters.push({
        name: nameInput,
        health: parseInt(healthInput),
        attack: parseInt(attackInput),
        class: classSelect,
        Image: imageInput
    });

    displayCharactersList();
}

function DeleteCharacter(index) {
    characters.splice(index, 1);
    displayCharactersList();
}

function showAddCharacterContainer() {
	document.getElementById("dropdown").style.display = "block";
	const fileInput = document.getElementById("imageInput");
	fileInput.addEventListener("change", previewFile);
}

function previewFile() {
	const file = document.getElementById("imageInput").files[0];
	const reader = new FileReader();

	reader.addEventListener("load", () => {
		document.getElementById("imageInputPreview").src = reader.result;
	});
	if (file) {
		reader.readAsDataURL(file);
	}
}