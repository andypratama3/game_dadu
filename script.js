/////////////  Variable   ////////////////////////////
////////////////////////////////////////////////////
const gambar_dadu = document.querySelector(".dice");
const player_0 = document.querySelector(".player-0");
const player_1 = document.querySelector(".player-1");
const current_score0 = document.getElementById("current-0")
const current_score1 = document.getElementById("current-1")
const score_0 = document.getElementById("score-0");
const score_1 = document.getElementById("score-1");
const button_putar = document.getElementById("btn-putar");
const button_game_baru = document.getElementById("btn-baru");
const button_tahan = document.getElementById("btn-tahan");
const player_winner = document.querySelector('.player-winner');

/////////////  Player   ////////////////////////////
/////////////////////////////////// /////////////////
const giliran = document.querySelector(".giliran-main");

let skor = [0,0];
let skor_ditahan = 0;
let player_active = 0;


function ganti_player() {
    skor_ditahan = 0;
    document.getElementById(`current-${player_active}`).textContent = skor_ditahan;

    player_active = player_active === 0 ? 1 : 0;
    player_0.classList.toggle("player-active");
    player_1.classList.toggle("player-active");

    giliran.value = `Giliran: Pemain ${player_active + 1}`;
    
    // giliran.textContent = `Giliran: Pemain ${player_active + 1}`;
}


button_putar.addEventListener('click', function () {
    const angka_dadu = Math.floor(Math.random() * 6) + 1;
    // const angka_dadu = 50;
    gambar_dadu.src = `./images/dadu-${angka_dadu}.png`;
    gambar_dadu.style.display = "block";

    if (angka_dadu == 1) {
        ganti_player();
    } else {
        skor_ditahan += angka_dadu;
        document.getElementById(`current-${player_active}`).textContent = skor_ditahan;
    }
});

button_tahan.addEventListener('click', function () {
    skor[player_active] += skor_ditahan;
    document.getElementById(`score-${player_active}`).textContent = skor[player_active];

    if (skor[player_active] >= 10) {
        document.getElementById(`name-${player_active}`).textContent = "Pemenang!";
        gambar_dadu.style.display = "none";
        button_putar.style.display = "none";
        const winningPlayer = document.querySelector(`.player-${player_active}`);
        // Remove the "player-active" class and add the "player-winner" class to change the background style
        winningPlayer.classList.remove('player-active');
        winningPlayer.classList.add('player-winner');
        
    } else {
        ganti_player();
    }
});

button_game_baru.addEventListener('click', function () {
    skor = [0,0];
    skor_ditahan = 0;
    giliran.value = `Giliran: Pemain ${player_active + 1}`;
    
    score_0.textContent = 0;
    score_1.textContent = 0;
    current_score0.textContent = 0;
    current_score1.textContent = 0;
    player_0.classList.add("player-active");
    gambar_dadu.style.display = "block";
    button_putar.style.display = "block";
    player_1.classList.remove("player-active");
    const winningPlayer = document.querySelector(`.player-${player_active}`);    
    winningPlayer.classList.remove('player-winner');
    gambar_dadu.src = `./images/dadu-1.png`;
});