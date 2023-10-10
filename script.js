
/////////////  Variable   ////////////////////////////
////////////////////////////////////////////////////
const gambar_dadu = document.querySelector(".dice");
const player_0 = document.querySelector(".player-0");
const player_1 = document.querySelector(".player-1");
const current_score0 = document.getElementById("current-0")
const score_0 = document.getElementById("score-0");
const button_putar = document.getElementById("btn-putar");
const button_game_baru = document.getElementById("btn-baru");
/////////////  Player   ////////////////////////////
////////////////////////////////////////////////////
const giliran = document.querySelector(".giliran-main");

let skor = 0;
let skor_ditahan = 0;

function ganti_player(){
    skor_ditahan = 0;
}


button_putar.addEventListener('click', function (){    
    const angka_dadu = Math.floor(Math.random() * 6) + 1;    
    gambar_dadu.src = `./images/dadu-${angka_dadu}.png`;
    gambar_dadu.style.display = "block";

    if(angka_dadu == 1){
        ganti_player();
    }else{
        skor += angka_dadu;
        current_score0.textContent = skor;
    }
});

button_game_baru.addEventListener('click', function (){
    
});