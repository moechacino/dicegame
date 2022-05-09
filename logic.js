var p1 = "Player 1";
var p2 = "Player 2";

function editNama() {
    p1 = prompt("Masukkan nama Player 1");
    p2 = prompt("Masukkan nama Player 2");
    document.querySelector("p.p1").innerHTML=p1;
    document.querySelector("p.p2").innerHTML=p2;
}
function kocok() {
    document.querySelector(".leftdice").setAttribute("src","dice"+ randomNum1 + ".png");
    document.querySelector(".rightdice").setAttribute("src","dice"+ randomNum2 +"g.png");
}
function kocokDadu() {
    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    var randomNum2 = Math.floor(Math.random() * 6) + 1;
    for(let i = 500; i<5000; i+=500) {
    setTimeout( function(){
        document.querySelector(".leftdice").setAttribute("src","dice"+ randomNum1 + ".png");
        document.querySelector(".rightdice").setAttribute("src","dice"+ randomNum2 +"g.png");
        if(randomNum1 == randomNum2)
        document.querySelector("h2").innerHTML="Imbang";
        else if (randomNum1 > randomNum2 )
        document.querySelector("h2").innerHTML=p1;
        else 
        document.querySelector("h2").innerHTML=p2;
        randomNum1 = Math.floor(Math.random() * 6) + 1;
        randomNum2 = Math.floor(Math.random() * 6) + 1;
    }, i);
    }
    setTimeout(function() {
    document.querySelector(".leftdice").setAttribute("src","dice"+ randomNum1 + ".png");
    document.querySelector(".rightdice").setAttribute("src","dice"+ randomNum2 +"g.png");
    },5000)
    setTimeout(function(){
        if(randomNum1 == randomNum2)
        document.querySelector("h2").innerHTML="Imbang, Ulang Lagi !";
        else if (randomNum1 > randomNum2 )
        document.querySelector("h2").innerHTML= `Yee ${p1} Menang !`;
        else 
        document.querySelector("h2").innerHTML=`Yee ${p2} Menang !`;
    }, 5500)
}
