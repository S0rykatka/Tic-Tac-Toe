var lista = [null,null,null,null,null,null,null,null,null];
var player = "O";
var playactive = true;
var player1 = 0;
var player2 = 0;
var wins = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,3,6], 
    [1,4,7], 
    [2,5,8], 
    [0,4,8],
    [2,4,6] 
]
var tura = 1;
function move(event) {
    var id = event.target.id;
    document.getElementById("tura").innerHTML = "Round number: " + tura;
    if (id && playactive && !checkWIn()){
        if (player === "O" && !lista[id]) {
            lista[id] = "O";
            document.getElementById(id).innerHTML = player;
            document.getElementById("Status").innerHTML = "Player turn: O";
            checkWIn();
            player = "X";
            return;
        }
        if (player === "X" && !lista[id]) {
            lista[id] = "X";
            document.getElementById(id).innerHTML = player;
            document.getElementById("Status").innerHTML = "Player turn: X";
            checkWIn();
            player = "O";
            return;
        }
    }
}
function checkWIn(){
    if(playactive){
        for (i = 0; i <=9; i++) {
            if (!lista.includes(null)){
                document.getElementById("Status").innerHTML = "tie";
                playactive = false;
            }
        }
        for(i = 0;i < 8; i++) {
            listaToCheck = wins[i];
            if (lista[listaToCheck[0]]) {
                if ((lista[listaToCheck[0]] === lista[listaToCheck[1]] &&  lista[listaToCheck[1]] === lista[listaToCheck[2]])) {
                    console.log(listaToCheck[0])
                    console.log(listaToCheck[1])
                    console.log(listaToCheck[2])
                    document.getElementById("Status").innerHTML = "Player wins: " + player;
                    playactive = false;
                }
            }
        }   
    }    
}
function restart(event) {
    lista = [null,null,null,null,null,null,null,null,null];
    player = "O";
    playactive = true;
    tura += 1
    document.getElementById("Status").innerHTML = "";
    for (i = 0; i <= 8; i ++) {
        document.getElementById(i).innerHTML = "";
    }
}