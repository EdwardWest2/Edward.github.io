const TA = document.getElementById("TA")
const username = document.getElementById("username")
const btn = document.getElementById("btn")

btn.onclick = function(){
    alert("Hai " +username.value + " Pesan " + '"' + TA.value+'"'  + " telah terkirim ")
}