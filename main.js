/*used gemini to debug occasioanlly*/


window.addEventListener("keydown", movement);

//canavs setup thingies
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var px = 5;
var py=5;
c.width = 678 * window.devicePixelRatio;
c.height = 412 * window.devicePixelRatio;

let endDayScreenWait = 3000;//in miliseconds
//statuses
let speedMult = 1;  

let sleeping = false;
var speed = 10 * speedMult;
let moveState = true; //true means allowed to move
//stats
let hunger = 100;
let foodSupply = 100;
let thirst = 100;
let waterSupply = 100;
let condition = 100;
let sleep = 100;
let actions;
let day = 0;
//objects/elements
let player=new Image();
player.src="/assets/playerup.png";
//funcs
function draw(){
    window.requestAnimationFrame(draw);
    ctx.clearRect(0, 0, c.width, c.height); 
 
    ctx.drawImage(player, px, py);
    if(sleeping){
        ctx.fillRect(0, 0, c.width, c.height);

    }
}

draw();

function movement(){
    switch(event.key){
            //movement
            case "w":
                if(py > 0 && moveState){
                    py-=speed;
                    player.src="/assets/playerup.png"
                }
                break;
            case "a":
                if(px > 0 && moveState){
                    px-=speed;
                    player.src="/assets/playerleft.png"
                }
                break;
            case "s":
                if(py < c.height - player.height && moveState){
                    py+=speed;
                    player.src="/assets/playerdown.png"
                }
                break;
            case "d":
                if(px < c.width - player.width && moveState){
                    px+=speed;
                    player.src="/assets/playerright.png"
                }
                break;
            //interact
            case "e":
                moveState = false;
                let interactable = getElementAt(px + player.width / 2, py + player.height / 2);
                console.log(interactable);
                if(getElementAt(interactable != null)){
                    if(interactable == "water"){
                        let thirstIncrease = 10;
                        thirst += thirstIncrease * 150/sleep;
                        waterSupply -= thirstIncrease;
                    } else if (interactable == "food"){
                        let hungerIncrease = 10;
                        hunger += hungerIncrease * 100/sleep;
                        foodSupply -= hungerIncrease;
                    } else if (interactable == "bed"){
                        passDay();
                    } else if (interactable == "maintenance"){
                        let conditionIncrease = 20;
                        condition += conditionIncrease * 100/sleep;
                        sleep -= conditionIncrease / 2;
                    }
                }
                moveState = true;
                break;
    }
}

function passDay(){
    /*screen goes to black, display text
    of todays discoveries, then return*/
    sleeping = true;

    if(day == 0){
        let message = new Text("Congratulation on " + day + ". Discovery/ies");
        setTimeout(pass);
        message = null;
    } else if (day == 1){
        let message = new Text("Congratulation on " + day + ". Discovery/ies");
        setTimeout(pass(), endDayScreenWait);
        message = null;
    } else if (day == 2){
        let message = new Text("Congratulation on " + day + ". Discovery/ies");
        setTimeout(pass(), endDayScreenWait);
        message = null;
    } else if (day == 3){
        let message = new Text("Congratulation on " + day + ". Discovery/ies");
        setTimeout(pass(), endDayScreenWait);
        message = null;
    } else if (day == 4){
        let message = new Text("Congratulation on " + day + ". Discovery/ies");
        setTimeout(pass(), endDayScreenWait);
        message = null;
    } else if (day == 5){
        let message = new Text("Congratulation on " + day + ". Discovery/ies");
        setTimeout(pass(), endDayScreenWait000);
        message = null;
    } else if (day == 6){
        let message = new Text("Congratulation on " + day + ". Discovery/ies");
        setTimeout(pass(), endDayScreenWait);
        message = null;
    } else if (day == 7){
        let message = new Text("Congratulation on " + day + ". Discovery/ies");
        setTimeout(pass(), endDayScreenWait);
        message = null;
    } else if (day > 7){
        let message = new Text("Congratulation on " + day + ". You're too far to return your findings to earth.");
        setTimeout(pass(), endDayScreenWait);
        message = null;
    }

    day++;
    hunger -= 0;
    thirst -= 0;
    condition -= 0;
    sleep += 0;

    sleeping = false;
}

function speedSetting(){
    if(speedMult == 1){
        speedMult = 2;
    } else {
        speedMult = 1;
    }
}

function pass(){
    null;
}