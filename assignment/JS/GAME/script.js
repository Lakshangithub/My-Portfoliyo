var jumpSound = new Audio("resources/jump.mp3");
var runSound = new Audio("resources/run.mp3");
var winSound = new Audio("resources/win.mp3");
var winSound1 = new Audio("resources/win1.mp3");
var backgroundMusicA = new Audio("resources/backgroundSound.mp3");




runSound.loop = true;
backgroundMusicA.loop = true;

function keyCheck(event) {
    var keyCode = event.which;


    if (keyCode == 13) {
        // enter
        // alert("enter");

        backgroundMusicA.play();

        if (moveBackgroundAnimationId == 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100);
            runSound.play();

        }
        if (boyRunAnimationId == 0) {
            boyRunAnimationId = setInterval(boyRunAnimation, 100);

        }
        if (boxAnimationId == 0) {
            boxAnimationId = setInterval(boxAnimation, 100);

        }

    }

    if (keyCode == 32) {
        // space
        // alert("space");

        backgroundMusicA.play();


        if (boyJumpAnimationId == 0) {
            clearInterval(boyRunAnimationId);
            runSound.pause();
            runSound.currentTime = 0;
            boyRunAnimationId = 0;
            boyRunImageNumber = 1;
            boyJumpAnimationId = setInterval(boyJumpAnimation, 100);
            jumpSound.play();


        }
    }
}


var backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;

var score = 0;

function moveBackground(){
    
    backgroundImagePositionX = backgroundImagePositionX -20;

    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX+"px";

    score = score + 1;
    document.getElementById("score").innerHTML = score;

    if (score == 280) {
        //alert("ok");
        document.getElementById("win").style.visibility = "visible";

        clearInterval(boxAnimationId);

        clearInterval(boyJumpAnimationId);
        jumpSound.pause();
        boyJumpAnimationId = -1;

        backgroundMusicA.pause();

        winSound.play();




    }

}

var boyRunImageNumber = 1;
var boxAnimationId = 0;

function boyRunAnimation() {
    boyRunImageNumber = boyRunImageNumber + 1;
    if (boyRunImageNumber == 9) {
        boyRunImageNumber = 1;

    }
    document.getElementById("boy").src = "resources/Run (" + boyRunImageNumber + ").png";

}

var boyJumpImageNumber = 1;
var boyJumpAnimationId = 0;
var boyMarginTop = 323;
  
function boyJumpAnimation() {
    boyJumpImageNumber = boyJumpImageNumber + 1;
    

    if (boyJumpImageNumber <= 7) {
        boyMarginTop = boyMarginTop -20;
        document.getElementById("boy").style.marginTop = boyMarginTop + "px";

    }
    if (boyJumpImageNumber >= 8) {
        boyMarginTop = boyMarginTop + 20;
        document.getElementById("boy").style.marginTop = boyMarginTop + "px";

    }
    if (boyJumpImageNumber == 13) {
        clearInterval(boyJumpAnimationId);
        jumpSound.pause();
        jumpSound.currentTime = 0;
        boyJumpAnimationId = 0;
        boyJumpImageNumber = 1;

        boyRunAnimationId = setInterval(boyRunAnimation, 100);
        runSound.play();

        if (moveBackgroundAnimationId == 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100);

        }
        if (boxAnimationId == 0) {
            boxAnimationId = setInterval(boyRunAnimation, 100);

     
     
        }
    }

    document.getElementById("boy").src = "resources/Jump (" + boyJumpImageNumber + ").png";
    

}

var boyDeadImageNumber = 1;
var boyDeadAnimationId = 0;

var deadSound = new Audio("resources/dead.mp3");

function boyDeadAnimation() {

    boyDeadImageNumber = boyDeadImageNumber + 1;

    if (boyDeadImageNumber == 11) {
        clearInterval(boyDeadAnimationId);
        boyDeadImageNumber = 10;


        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = score;

    }

    document.getElementById("boy").src = "resources/Dead (" + boyDeadImageNumber + ").png";

}

var boxMarginLeft = 1000;

boxMarginLeft = 1540;

function createBoxes(){

    for (var i = 0; i <= 10; i++){
        var box = document.createElement("div");
        box.className = "box";
        box.id = "box" + i;
        box.style.marginLeft = boxMarginLeft +"px";
      

        if (i < 5) {
            boxMarginLeft = boxMarginLeft + 2000;
        }

       if (i >= 5) {
            boxMarginLeft = boxMarginLeft + 1000;
        }
        //if (score == 10) {
        //   // function winAnimation();
        //   // setInterval(winAnimation);
        //   document.getElementById("win").style.visibility = "visible";

        // }

        document.getElementById("background").appendChild(box);

    }
}

var boxAnimationId = 0;

function boxAnimation() {
    // alert("ok");
    for (var i = 0; i < 10; i++) {
        var box = document.getElementById("box" + i);
        var currentMarginLeft = getComputedStyle(box).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 35;
        box.style.marginLeft = newMarginLeft + "px";



        // alert(newMarginLeft);


        if (newMarginLeft >= 80 & newMarginLeft <= 200) {
            // alert("iwarai");

            if (boyMarginTop >= 303) {


                clearInterval(boxAnimationId);

                clearInterval(boyRunAnimationNumberId);
                runSound.pause();
                boyRunAnimationId = -1;

            
                clearInterval(boyjumpAnimationNumberId);
                jumpSound.pause();
                boyJumpAnimationId = -1;


                clearInterval(moveBackgroundAnimationId);
                moveBackgroundAnimationId = -1;

                backgroundMusicA.pause();

                boyDeadAnimationId = setInterval(boyDeadAnimation, 100);
                deadSound.play();


               
            }

        }

    } 

}  


function reload1() {
    location.reload();
}

// function winAnimation() {
//   // document.getElementById("win").style.visibility = "visible";

//  // if (score == 10) {
 //      alert("ok");
    
// }

