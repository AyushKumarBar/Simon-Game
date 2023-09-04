var seq = [];
var input = 6;
var i = 0;
var rand;
var flag = 0;
var score = 0;
var highscore = 0;
var sound = [
  "./sounds/green.mp3",
  "./sounds/red.mp3",
  "./sounds/yellow.mp3",
  "./sounds/blue.mp3",
  "./sounds/wrong.mp3",
];

function randomSequence() {
  rand = Math.floor(Math.random() * 4);
  console.log(rand);
  seq.push(rand);
}
var index;
var loc = document.querySelectorAll(".btnn");

// console.log( loc[input-1]);

function glowSeq(input) {
  loc[input].style.opacity = "0.5";
}

function checker(input) {
  console.log(seq);
  if (seq[i] === input) {
    i++;
  } else {
    for (let index = 0; index < loc.length; index++) {
      loc[index].style.opacity = "1";
    }
    $("body").css("background-color", "red");
    var aud = new Audio(sound[4]);
    aud.play();
    setTimeout(() => {
      $("body").css("background-color", "#011F3F");
    }, 200);
    flag = 0;
  }
  if (i === seq.length) {
    randomSequence();
    setTimeout(() => {
      glowSeq(seq[seq.length - 1]);
      var audi = new Audio(sound[seq[seq.length - 1]]);
      audi.play();
    }, 1000);

    score += 10;
    document.querySelector("h2").innerText = "Score : " + score;

    setTimeout(() => {
      loc[seq[seq.length - 1]].style.opacity = "1";
    }, 1200);

    console.log("new" + seq);
    i = 0;
  }
  if (score > highscore) {
    highscore = score;
    document.querySelector("h3").innerText = "High Score : " + highscore;
  }
}

function startGame(flag) {
  if (flag === 0) {
    seq = [];
    i = 0;
    score = 0;
    document.querySelector("h1").innerText = "Press Play to Start";
    document.querySelector("h2").innerText = "Score : " + score;
  }
}
function dontGlow() {
  loc[index].style.opacity = "1";
}

$(".green").click(function () {
  input = 0;
});
$(".red").click(function () {
  input = 1;
});
$(".yellow").click(function () {
  input = 2;
});
$(".blue").click(function () {
  input = 3;
});

$(".btnn").click(function () {
  if (flag !== 0) {
    glowSeq(input);
    var audi = new Audio(sound[input]);
    audi.play();
    setTimeout(() => {
      loc[input].style.opacity = "1";
    }, 200);
    glowSeq(input);
    var audi = new Audio(sound[input]);
    audi.play();
    checker(input);

    startGame(flag);
  }
});

$(".play").click(function () {
  flag = 1;
  document.querySelector("h1").innerText = "";
  randomSequence();

  glowSeq(rand);
  var audi = new Audio(sound[rand]);
  audi.play();
  setTimeout(() => {
    loc[rand].style.opacity = "1";
  }, 200);
  startGame(flag);
});
