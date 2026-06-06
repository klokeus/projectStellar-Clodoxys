/*used gemini to debug occasioanlly*/


window.addEventListener("keydown", movement);

//canavs setup thingies
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var px = 5;
var py=5;
c.width = 671 * window.devicePixelRatio;
c.height = 404 * window.devicePixelRatio;
//statuses
let speedMult = 1;  
var speed = 10 * speedMult;
//stats
let hunger = 100;
let foodSupply = 100;
let thirst = 100;
let waterSupply = 100;
let condition = 100;
let sleep = 100;
let day = 0;
//objects/elements
let player=new Image();
player.src="/assets/playerSprites.png";
//funcs
function draw(){
    window.requestAnimationFrame(draw);
    ctx.clearRect(0, 0, c.width, c.height); 
 
    ctx.drawImage(player, px, py);
}

draw();

function movement(){
    switch(event.key){
            //movement
            case "w":
                if(py > 0){
                    py-=speed;
                }
                break;
            case "a":
                if(px > 0){
                    px-=speed;
                }
                break;
            case "s":
                if(py < c.height - player.height){
                    py+=speed;
                }
                break;
            case "d":
                if(px < c.width - player.width){
                    px+=speed;
                }
                break;
            //interact
            case "e":
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
                    }
                }
                break;
    }
}

function passDay(){
    /*screen goes to black, display text
    of todays discoveries, then return*/
    
    day++;
    hunger -= 0;
    thirst -= 0;
    condition -= 0;
    sleep += 0;
}