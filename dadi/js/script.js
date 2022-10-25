/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const rollDice = document.getElementById('btnDice');

rollDice.addEventListener('click',

    function () {

        let usrNum = Math.floor((Math.random() * 10) + 1);
        let skyNum = Math.floor((Math.random() * 10) + 1);

        document.getElementById('userNumber').innerHTML = usrNum;
        document.getElementById('skynetNumber').innerHTML = (skyNum);

        if (usrNum > skyNum) {
            document.getElementById('winner').innerHTML = "Mankind wins";
        }

        else if (usrNum < skyNum) {
            document.getElementById('winner').innerHTML = "Skynet wins";
        } 
        
        else {
            document.getElementById('winner').innerHTML = "Draw";
        }
    }

);
