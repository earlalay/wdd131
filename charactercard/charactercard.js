const characterInfo = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 80,
    attacked: function() {
        this.health -= 20;
    },
    levelUp: function() {
        this.level += 1;
    }
}

function setCharacterCard(character) {
    const characterName = document.querySelector("#character-name");
    const characterClass = document.querySelector("#character-class");
    const characterLevel = document.querySelector("#character-level");
    const characterHealth = document.querySelector("#character-health");
    const characterImage = document.querySelector("#character-img");
    characterName.textContent = `Name: ${character.name}`;
    characterClass.textContent = `Class: ${character.class}`;
    characterLevel.textContent = `Level: ${character.level}`;
    characterHealth.textContent = `Health: ${character.health}`;
    characterImage.src = "images/characterCard.png";
}

setCharacterCard(characterInfo);

function attackHandler() {
    characterInfo.attacked();
    const characterHealth = document.querySelector("#character-health");
    characterHealth.textContent = `Health: ${characterInfo.health}`;
    if (characterInfo.health <= 0) {
        alert("Character Died");
    }
}

function levelHandler() {
    characterInfo.levelUp();
    const characterLevel = document.querySelector("#character-level");
    characterLevel.textContent = `Level: ${characterInfo.level}`;
}

document
    .querySelector("#attacked")
    .addEventListener("click", attackHandler);

document
    .querySelector("#level-up")
    .addEventListener("click", levelHandler);