import { BOARD_POS_BLUE, BOARD_POS_GREEN, BOARD_POS_RED, BOARD_POS_YELLOW, END_POS, HOME_POS } from "./js/pos.js";
import { BOARD_POS, START_POS } from "./js/pos.js";

var gameSit = 0;
var numPlayG = 0;
var dieG = -1;
var currGame = {
    red: [-1, -1, -1, -1],
    blue: [-1, -1, -1, -1],
    green: [-1, -1, -1, -1],
    yellow: [-1, -1, -1, -1]
}
var dieRolls = []

var userColorMap_2 = ["yellow", "red"];
var userColorMap_3 = ["yellow", "red", "green"];
var userColorMap_4 = ["blue", "red", "green", "yellow"];

var userColorMap;


document.getElementById("roll-btn").onclick = () => {
    if(!avaiableMoves(currGame, userColorMap[(gameSit%numPlayG)], dieG)){
        var die_img = document.getElementById("dice-img");
        var die_num = Math.floor(Math.random() * 6) + 1;
        dieG = die_num;
        die_img.src = "img/" + die_num + ".jpg";
        dieRolls.push(die_num)
        gameSit++;

        document.getElementById("player-info").innerHTML = userColorMap[(gameSit%numPlayG)];
        handleRoll(die_num, userColorMap[(gameSit%numPlayG)]);
    }
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
        dieG = die_num;
        dieRolls.push(die_num)
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
            var currPiece = currGame[colorD][ind]

            var end = END_POS[colorD]
            var diff = end - currPiece
            var ifEnd = diff <= die_num && diff > 0

            if(colorD == userColorMap[(gameSit%numPlayG)] && die_num != -1){
                if(currPiece == -1){
                    if(die_num == 6){
                        movePiece(elemId, START_POS[colorD]);
                    }
                }
                else{
                    if(!ifEnd){
                        movePiece(elemId, currPiece + die_num)
                    }else{
                        if(colorD == "red") movePieceCo(elemId, BOARD_POS_RED[die_num - diff - 1]);
                        else if(colorD == "blue") movePieceCo(elemId, BOARD_POS_BLUE[die_num - diff - 1]);
                        else if(colorD == "green") movePieceCo(elemId, BOARD_POS_GREEN[die_num - diff - 1 ]);
                        else if(colorD == "yellow") movePieceCo(elemId, BOARD_POS_YELLOW[die_num - diff - 1]);
                    }
                }
            }
            die_num = -1;
        }
    }
}

function movePieceCo(piece_id, target){
    var info = piece_id.split("-")
    var color = info[1]
    // console.log("Moving to: ", target)
    // var piece = document.getElementById(piece_id)
    // piece.style.top = target[0] + "vh"
    // piece.style.left = target[1] + "vw"
    alert(color+" Successfully completed one piece")
    document.getElementById(piece_id).hidden = true
    var index = info[2]
    currGame[color][index] = 99
    checkWin(color);
}

function movePiece(piece_id, target){
    if(target >= 52) target-=52;
    var piece = document.getElementById(piece_id)
    var elemId = piece.id
    var indexInfo = elemId.split("-")
    var color = indexInfo[1]
    var index = indexInfo[2]
    piece.style.top = BOARD_POS[target][0]+"vh";
    piece.style.left = BOARD_POS[target][1]+"vw";
    currGame[color][index] = target
}

function avaiableMoves(currGame, color, die_num){
    var flag = true;
    for(var x in currGame[color]){
        if(currGame[color][x] != -1){
            flag = false;
        }
    }
    if(flag){
        if(die_num == 6){
            return true;
        }
    }
    return false;
}


function checkWin(color){
    var flag = true;
    for(var x in currGame[color]){
        if(currGame[color][x] != 99){
            flag = false;
        }
    }
    if(flag){
        alert(color+" Won the game")
    }
}

document.getElementById("reset-btn").onclick = () =>{
    location.reload();
}