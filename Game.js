
//Main Div
const start_main_Game = document.querySelector('.mainG');
const attack_btn = document.querySelector('.attack-button');
const topOfGame = document.querySelector('.topGame');


//All clouds in Battle field.
const cloud = document.querySelectorAll('.cloud');
const top_cloudsL = document.querySelectorAll('.top-cloudsL');
const top_cloudsR = document.querySelectorAll('.top-cloudsR');

//Audios List
const swish_down = document.getElementById("swish-down");
const btn_sound = document.getElementById("btn-sound");

//Score Board
const number_of_wins = document.getElementById("win");
const number_of_lose = document.getElementById("lose");
let win = 0;
let lose = 0;
number_of_wins.textContent = win;
number_of_lose.textContent = lose;

topOfGame.addEventListener('click', ()=>{
   setTimeout(()=>{ 
      // Enter The Battle Area
      start_main_Game.style.transform = "translateY(340px)";
   }, 1000);
   
   setTimeout(()=>{
      cloud[0].classList.add("c1-cloud-entry");
      cloud[1].classList.add("c2-cloud-entry");
      cloud[2].classList.add("c3-cloud-entry");

      document.querySelector('.score-header').classList.add("hide-records")
      document.getElementById("title-label").style.display = "none";
   }, 700);

   setTimeout(()=>{
      swish_down.play();
      swish_down.volume = .3;

      document.getElementById("game-title").classList.add("hideTitle");
      top_cloudsL.forEach(cloud => cloud.classList.add("hide-cloudsL"));
      top_cloudsR.forEach(cloud => cloud.classList.add("hide-cloudsR"));
   }, 800);
   
   //For button and bird
   setTimeout(()=>{
      document.querySelector('.bird').style.display = 'none';

      attack_btn.classList.add("show_btn");
      setTimeout(()=>{attack_btn.style.transition = "0s"},1205);
   }, 1200);
});

attack_btn.addEventListener('click', ()=>{
   btn_sound.play();
   btn_sound.volume = .4;
});



const sub_btn = document.querySelector('.sub-btn');
sub_btn.addEventListener("click", ()=>{
   start_main_Game.style.transition = '.5s';
   start_main_Game.style.transform = "translateY(0px)";
});


