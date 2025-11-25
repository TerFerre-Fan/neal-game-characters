// time to javascript W, ik kan nie verder werken zonder tayissa haar deel
const CardClasses = ["dwarf", "elf", "human", "orc", "mage"];

let NewCardHealth = null;
let NewCardAttack = null;
let NewCardMana = null;

function DeleteCard() {}
function CreateCard() {}

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("poop");
    
    CardClasses.forEach(function(CardClass) {
        const poopDiv = document.createElement("div");
        poopDiv.innerHTML = CardClass;
        container.appendChild(poopDiv);
    });
});