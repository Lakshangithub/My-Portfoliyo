var boy = document.getElementById("boy");
idleImageNumber = 0;
idleAnimationNumber = 0;

function idleAnimation(){

    idleImageNumber = idleImageNumber + 1;
    if (idleImageNumber == 11){
        idleImageNumber = 1;
    }


    boy.src = "Resources/idle ("+idleImageNumber+").png";
}

function idleAnimationStart(){
   idleAnimationNumber = setInterval(idleAnimation,200);
}


runImageNumber = 0;
runAnimationNumber = 0;

function runAnimation() { 

    runImageNumber = runImageNumber + 1;

    if (runImageNumber == 11) {
        runImageNumber = 1;

    }


    boy.src = " Resources/run ("+runImageNumber +" ).png";
   
}

function runAnimationStart(){

    runAnimationNumber = setInterval(runAnimation,100);

    clearInterval(idleAnimationNumber);

}

function keyCheck(event){
    //alert(event.which);
    //enter = 13

    var keyCod = event. which;

    if(keyCod == 13){
        if(runAnimationNumber == 0){
            runAnimationStart();

        }

    }

    }
