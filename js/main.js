var gameSit = 0;
var numPlayG = 0;

function rollDie(){
    var die_img = document.getElementById("dice-img");
    var die_num = Math.floor(Math.random() * 6) + 1;
    console.log(die_num);
    die_img.src = "img/" + die_num + ".jpg";
    gameSit++;
    document.getElementById("player-info").innerHTML = (gameSit%numPlayG) + 1;
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("OP loaded")
    document.getElementById("game").hidden = true;
})

function startGame(){
    var numPlay = document.querySelector('input[name="play-no"]:checked').value;
    if(numPlay!=null){
        numPlayG = numPlay;
        document.getElementById("game").hidden = false;
        document.getElementById("intro").hidden = true;
    }
}