import { HOME_POS } from "./js/pos.js";

var gameSit = 0;
var numPlayG = 0;

document.getElementById("roll-btn").onclick = () => {
    var die_img = document.getElementById("dice-img");
    var die_num = Math.floor(Math.random() * 6) + 1;
    die_img.src = "img/" + die_num + ".jpg";
    gameSit++;
    document.getElementById("player-info").innerHTML = (gameSit%numPlayG) + 1;
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("OP loaded")
    document.getElementById("game").hidden = true;
})

document.getElementById("strt").onclick = () =>{
    var numPlay = document.querySelector('input[name="play-no"]:checked').value;
    if(numPlay!=null){
        numPlayG = numPlay;
        document.getElementById("game").hidden = false;
        document.getElementById("intro").hidden = true;
        drawPieces();
    }
}

function drawPieces(){
    var numPlay = numPlayG;
    console.log("Drawing pieces")
    var parentElem = document.getElementById("pieces-parent");
    for(var x in HOME_POS){
        if(numPlay>0){
            for(var y in HOME_POS[x]){
                var newPiece = document.createElement("div");
                newPiece.className = "piece " + x ;
                newPiece.id = "piece" + "-" + x + "-" + y;
                newPiece.style.left = HOME_POS[x][y][1] + "%";
                newPiece.style.top = HOME_POS[x][y][0] + "%";
                parentElem.appendChild(newPiece);
            }
            numPlay--;
        }
    }
}