let numUser = Math.round((Math.random()*6)+1);
let numPc = Math.round((Math.random()*6)+1);
console.log(numPc);
console.log(numUser);


if (numUser > numPc){
    console.log("Hai vinto!!!");
}else if(numUser < numPc){
    console.log("Ci dispiace ma hai perso");
}else{
    console.log("Avete pareggiato");
}