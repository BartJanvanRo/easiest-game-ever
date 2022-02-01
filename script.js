var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

const ArrayRound = ["a", "b", "c", "d"];


function jump() {
    if (character.classList == "animate") { return }
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 300);
}
var checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        block.style.animation = "none";
        alert("Game Over. score: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";

        block.innerHTML = ArrayRound[i];
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
        console.log(Math.floor(counter / 80))
        let roundReturn = Math.floor(counter / 80)
        block.innerHTML = ArrayRound[roundReturn];



        /* block.innerHTML = roundReturn */

    }
}, 10);




//block
