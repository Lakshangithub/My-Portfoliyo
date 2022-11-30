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


var bac

