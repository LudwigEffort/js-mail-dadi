/*

Mail
Chiedi all’utente la sua email, (form con input mail)
(controllo sintassi mail)
controlla che sia nella lista di chi può accedere, (verifica mail array)
stampa un messaggio appropriato sull’esito del controllo.

*/

/* Pseudocoding

BUTTON {

    IF (mail coretta) stampo ok

    ELSE (mail non coretta) stampo reinserisci mail

    CONST mailData = [mail1, mail2, mail3, mail4, mail5]

    FOR {}

    IF (mail presente array) stampo mail presente, reinserisci mail

    ELSE (mail non presente) stampo mail
}

*/

// let mailUser = document.getElementById('mailSpace').value

// if (mailUser.indexOf("@")!==-1){
//   console.log("mail");
// }
// else{
//   console.log("non mail");
// }

const sendMail = document.getElementById('btnSend')

sendMail.addEventListener('click',

    function()  {

        let mailUser = document.getElementById('mailUser').value;

        if (mailUser.indexOf("@")!==-1){
            document.getElementById('test-1').innerHTML = 'Email correct';
        }

        else{
            document.getElementById('test-1').innerHTML = 'Email incorrect';
        }
        
        const mailDataBase = ["user1@mail.com", "user2@mail.com", "user3@mail.com", "user4@mail.com", "user5@mail.com"];

        for (let i=0; i < mailDataBase.length; i++) {

            // mailUser == mailDataBase[i]

            if (mailUser === mailDataBase[i]) {
                document.getElementById('test-2').innerHTML = 'The email is in the database';
            } 

            else {
                document.getElementById('test-2').innerHTML = `Yours email is: ${mailUser}`;
            }

        }

        
    }

);