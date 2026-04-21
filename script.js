// time to javascript W
const CardClasses = ["dwarf", "elf", "human", "orc", "mage", "dictator"];

const characters = [
    {
        name: "Maurice",
        health: 100,
        attack: 20,
        class: "human",
        Image: "./donck.png"
    },
    {
        name: "Strong",
        health: 120,
        attack: 30,
        class: "orc",
        Image: "./strong.jpeg"
    },
    {
        name: "Louis",
        health: 120,
        attack: 20,
        class: "human",
        Image: "./louis.png"
    },
    {
        name: "Kim jung un",
        health: 120,
        attack: 25,
        class: "dictator",
        Image: "./kim.jpeg"
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
        spanImageView.innerHTML = `<img src="${characters[i].Image}" alt="${characters[i].name}" style=" height: 100px;">`;
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

function SubmitCharacter() {
    const nameInput = document.getElementById("nameInput").value;
    const healthInput = document.getElementById("healthInput").value;
    const attackInput = document.getElementById("attackInput").value;
    const classSelect = document.getElementById("classInput").value;
    const imageInput = document.getElementById("imageInputPreview").src;
    
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