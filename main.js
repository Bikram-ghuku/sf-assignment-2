import { HOME_POS } from "./js/pos.js";
import { BOARD_POS, START_POS } from "./js/pos.js";

var gameSit = 0;
var numPlayG = 0;
var currGame = {
    red: [-1, -1, -1, -1],
    blue: [-1, -1, -1, -1],
    green: [-1, -1, -1, -1],
    yellow: [-1, -1, -1, -1]
}

var userColorMap_2 = ["yellow", "red"];
var userColorMap_3 = ["yellow", "red", "green"];
var userColorMap_4 = ["blue", "red", "green", "yellow"];

var userColorMap;


document.getElementById("roll-btn").onclick = () => {
    var die_img = document.getElementById("dice-img");
    var die_num = Math.floor(Math.random() * 6) + 1;
    die_img.src = "img/" + die_num + ".jpg";
    gameSit++;
    document.getElementById("player-info").innerHTML = userColorMap[(gameSit%numPlayG)];
    handleRoll(die_num, userColorMap[(gameSit%numPlayG)]);
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
        if(numPlayG == 2){
            userColorMap = userColorMap_2;
        }
        else if(numPlayG == 3){
            userColorMap = userColorMap_3;
        }
        else{
            userColorMap = userColorMap_4;
        }
        document.getElementById("player-info").innerHTML = userColorMap[0];
        var die_img = document.getElementById("dice-img");
        var die_num = Math.floor(Math.random() * 6) + 1;
        die_img.src = "img/" + die_num + ".jpg";
        handleRoll(die_num, userColorMap[0]);
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
                newPiece.className = "piece " + x +" " + ("piece-"+x);
                newPiece.id = "piece" + "-" + x + "-" + y;
                newPiece.style.left = HOME_POS[x][y][1] + "vw";
                newPiece.style.top = HOME_POS[x][y][0] + "vh";
                parentElem.appendChild(newPiece);
            }
            numPlay--;
        }
    }
}

function handleRoll(die_num, player){
    var x = document.getElementsByClassName("piece-"+player);

    for(var i = 0; i < x.length; i++){
        x[i].onclick = (e) =>{
            var clickElem = e.target
            var elemId = clickElem.id
            var index = elemId.split("-")
            var colorD = index[1]
            var ind = index[2]
            console.log(index, currGame[colorD][ind])
            console.log(colorD, colorD == "red", colorD == "blue", colorD=="green")
            if(currGame[colorD][ind] == -1 && die_num == 6){
                movePiece(clickElem.id, START_POS[colorD]);
            }

        }
    }
}

function movePiece(piece_id, target){
    console.log("Moving piece")
    var piece = document.getElementById(piece_id)
    piece.style.top = BOARD_POS[target][0]+"vh";
    piece.style.left = BOARD_POS[target][1]+"vw";
    var elemId = piece.id
    var indexInfo = elemId.split("-")
    var color = indexInfo[1]
    var index = indexInfo[2]
    currGame[color][index] = target
}