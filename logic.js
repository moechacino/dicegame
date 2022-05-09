var num = 0;
function ganti(angka){
    document.getElementById("gambar").setAttribute("src",angka + ".png" );
    num = angka;
}

if (num==1)
document.getElementsByClassName("sebelum").style.display = "none";
function sebelum(){
    num = num - 1;
    document.getElementById("gambar").setAttribute("src",num + ".png" );

}
