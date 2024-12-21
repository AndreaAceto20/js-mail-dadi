
const invitati = ["andrea@gmail.com", "flavia@gmail.com", "giulio@outlook.it" ]

console.log(invitati);
let log = prompt("inserici la tua email")

let check = false;
for(i = 0 ; i < 3 ; i++){
    if(log === invitati[i]){
    console.log("sei invitato/a!!!!");
    check = true
    }
}  
if(!check){
    console.log("mi dispiace ma non sei invitato/a :(");
    
}

    