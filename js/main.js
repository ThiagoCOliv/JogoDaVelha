var player = null;
var winner = null;
var quadrados = document.getElementsByClassName("quadrado")

var selectedPlayer = document.getElementById("player");
var selectedWinner = document.getElementById("winner");

changePlayer("X")

function cliqueQuadrado(id)
{
    let quadrado = document.getElementById(id);

    if(quadrado.innerHTML === "X" || quadrado.innerHTML === "O" || winner === "X" || winner === "O")
    {
        return;
    }

    quadrado.innerHTML = player;
    quadrado.style.color = "#000";

    if(player === "X")
    {
        changePlayer("O")
    }
    else
    {
        changePlayer("X")
    }
    checkWinner()
}

function changePlayer(actualPlayer)
{
    player = actualPlayer;
    selectedPlayer.innerHTML = player;
}

function checkWinner()
{
    let quadrado1 = document.getElementById("1");
    let quadrado2 = document.getElementById("2");
    let quadrado3 = document.getElementById("3");
    let quadrado4 = document.getElementById("4");
    let quadrado5 = document.getElementById("5");
    let quadrado6 = document.getElementById("6");
    let quadrado7 = document.getElementById("7");
    let quadrado8 = document.getElementById("8");
    let quadrado9 = document.getElementById("9");

    if(checkSequence(quadrado1,quadrado2,quadrado3))
    {
        changeColor(quadrado1,quadrado2,quadrado3);
        changeWinner(quadrado1);
    }
    else if(checkSequence(quadrado4,quadrado5,quadrado6))
    {
        changeColor(quadrado4,quadrado5,quadrado6);
        changeWinner(quadrado4);
    }
    else if(checkSequence(quadrado7,quadrado8,quadrado9))
    {
        changeColor(quadrado7,quadrado8,quadrado9);
        changeWinner(quadrado7);
    }
    else if(checkSequence(quadrado1,quadrado4,quadrado7))
    {
        changeColor(quadrado1,quadrado4,quadrado7);
        changeWinner(quadrado1);
    }
    else if(checkSequence(quadrado2,quadrado5,quadrado8))
    {
        changeColor(quadrado2,quadrado5,quadrado8);
        changeWinner(quadrado2);
    }
    else if(checkSequence(quadrado3,quadrado6,quadrado9))
    {
        changeColor(quadrado3,quadrado6,quadrado9);
        changeWinner(quadrado3);
    }
    else if(checkSequence(quadrado1,quadrado5,quadrado9))
    {
        changeColor(quadrado1,quadrado5,quadrado9);
        changeWinner(quadrado1);
    }
    else if(checkSequence(quadrado3,quadrado5,quadrado7))
    {
        changeColor(quadrado3,quadrado5,quadrado7);
        changeWinner(quadrado3);
    }
}

function changeWinner(quadrado)
{
    winner = quadrado.innerHTML;
    selectedWinner.innerHTML = winner;
}

function changeColor(quadrado1, quadrado2, quadrado3)
{
    quadrado1.style.backgroundColor = "green";
    quadrado1.style.color = "white";
    quadrado2.style.backgroundColor = "green";
    quadrado2.style.color = "white";
    quadrado3.style.backgroundColor = "green";
    quadrado3.style.color = "white";
}

function checkSequence(quadrado1, quadrado2, quadrado3)
{
    let igual = false;

    if(quadrado1.innerHTML != "" && quadrado1.innerHTML === quadrado2.innerHTML && quadrado1.innerHTML === quadrado3.innerHTML)
    {
        igual = true;
    }
    return igual;
}

function reiniciar()
{
    winner = null;
    selectedWinner.innerHTML = "";

    for(let i = 0; i < 9; i++)
    {
        let quadrado = document.getElementById(i + 1);
        quadrado.style.backgroundColor = "#ccc2cc";
        quadrado.style.color = "#000"
        quadrado.innerHTML = "";
    } 

    changePlayer("X");
}