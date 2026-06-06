/*used gemini integrated copilot    to debug
copilot added the finally and try thingy*/

window.addEventListener("keydown", movement);

let dayZeroMessage = "";
let dayOneMessage = "";
let dayTwoMessage = "";
let dayThreeMessage = "";
let dayFourMessage = "";
let dayFiveMessage = "";
let daySixMessage = "";
let daySevenMessage = "";

//canavs setup thingies
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var px = 500;
var py=100;
c.width = 678 * window.devicePixelRatio;
c.height = 412 * window.devicePixelRatio;

let wiggleRoom = 200; //pixels
//statuses

let sleeping = false;
var speed = 15;
let moveState = true; //true means allowed to move
//stats
let hunger = 100;
let foodSupply = 100;
let thirst = 100;
let waterSupply = 100;
let sleep = 100; //sleep and actions are similar but sleep is js another way to ramp difficulty
let actions = 3;
let day = 0;
let dailyQuota = 1;
let research = 0;
const thirstIncrease = 10;
const conditionIncrease = 10;
const Scale = 3.5;
//objects/elements
let player=new Image();
player.src="playerdown.png";

let researchStation=new Image();
researchStation.src="researchtable.png";
const researchStationX = c.width / 2 - 200;
const researchStationY = c.height / 2 - 100;

let water=new Image();
water.src="water.png";
const waterX = 100;
const waterY = 100;

let garden=new Image();
garden.src="garden.png";
const gardenX = c.width - 250;
const gardenY = 150;

let bed=new Image();
bed.src="bed.png";
const bedX = 700;
const bedY = 600;     
//funcs
function draw(){
    window.requestAnimationFrame(draw);
    ctx.clearRect(0, 0, c.width, c.height); 
 
    ctx.drawImage(player, px, py,player.width * Scale,
  player.height * Scale);
    ctx.drawImage(bed, bedX, bedY,bed.width * 7,
  bed.height *7);
    ctx.drawImage(garden, gardenX, gardenY,garden.width * Scale,
  garden.height * Scale);
    ctx.drawImage(water, waterX, waterY,water.width * Scale,
  water.height * Scale);
  ctx.drawImage(researchStation, researchStationX, researchStationY,researchStation .width * Scale,
  researchStation.height * Scale);
    if(sleeping){
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, c.width, c.height);
        
    }
}

draw();
alert("Welcome aboard Rocket Stella, your goal is to venture as far as possible, whilst making numerous discoveries to expand our knowledge of the universe!!");


function movement(event){
    switch(event.key){
        //movement
        case "w":
            if(py > 0 && moveState){
                py-=speed;
                player.src="playerup.png"
            }
            break;
        case "a":
            if(px > 0 && moveState){
                px-=speed;
                player.src="playerleft.png"
            }
            break;
        case "s":
            if(py < c.height - player.height && moveState){
                py+=speed;
                player.src="playerdown.png"
            }
            break;
        case "d":
            if(px < c.width - player.width && moveState){
                px+=speed;
                player.src="playerright.png"
            }
            break;
        //interact
        case "e":
            if(actions == 0){
                alert("No actions left; Go to Sleep");
                break;
            }
            moveState = false;
            try {
                let interactable = distance();
                if(interactable != "none"){
                    if(interactable == "water" && waterSupply > 0){
                        thirst += thirstIncrease * 150 / sleep;
                        waterSupply -= thirstIncrease;
                        actions--;
                        alert("Thirst: " + thirst + "\nWater Supply: " + waterSupply + "\nActions:" + actions);
                    } else if (interactable == "garden" && foodSupply > 0){
                        let hungerIncrease = 10;
                        hunger += hungerIncrease * 100 / sleep;
                        foodSupply -= hungerIncrease;
                        actions--;
                        alert("Hunger: " + hunger + "\nFood Supply: " + foodSupply + "\nActions:" + actions);
                    } else if (interactable == "bed"){
                        passDay();
                    } else if (interactable == "researchStation"){
                        research++;
                        sleep -= 10;
                        actions--;
                        alert("Research: " + research + "\nToday's Quota: " + dailyQuota + "\nActions:" + actions);
                    }
                }
            } finally {
                moveState = true;
            }
            break;
    }
}


function passDay(){
    sleeping = true;
    moveState = false;

    window.requestAnimationFrame(() => {
        setTimeout(() => {
        if(dailyQuota <= research){
            foodSupply += 10;
            waterSupply += 20;s
        }
        if(dailyQuota <= research && day == 0){
            dayZeroMessage = "Today, you discovered a planet with a similar climate to Earth's! Perhaps its habitable?";
        } else if (dailyQuota <= research && day == 1){
            dayOneMessage = "You saw a comet shatter outside your window, luckily from a distance far enough to keep you safe.";
        } else if (dailyQuota <= researcg && day == 2){
            dayTwoMessage = "In the distance, a dark sphere is enveloped by a ring of light. You've discovered a new blackhole.";
        } else if (dailyQuota <= research && day == 3){
            dayThreeMessage = "When searching for signals, you recieved a response, when listening, it seemed to be in a language you can't understand.";
        } else if (dailyQuota <= researcg && day == 4){
            dayFourMessage = "You see two large masses collide, you're unfortunately too late to see if they were planets.";
        } else if (dailyQuota <= research && day == 5){
            dayFiveMessage = "You see another comet shatter, both brighter and larger than last time, amazing!";
        } else if (dailyQuota <= researcg && day == 6){
            daySixMessage = "You find a stellar fossil, mabye if you investigate it further you'll find information on the past";
        } else if (dailyQuota <= researcg && day == 7){
            daySevenMessage = "You've discovered something.. but its too advanced for our knowledge to decode what it is.";
        }
        dailyQuota++;

        if(day == 0){
            alert("Congratulation on surviving day " + day + ". Resources will be delivered tommorow if you meet the Quota of: " + dailyQuota);
        } else if (day == 1){
            alert("Congratulation on surviving day " + day + ". Resources will be delivered tommorow if you meet the Quota of: " + dailyQuota);
        } else if (day == 2){
            alert("Congratulation on surviving day " + day + ". Resources will be delivered tommorow if you meet the Quota of: " + dailyQuota);
        } else if (day == 3){
            alert("Congratulation on surviving day " + day + ". Resources will be delivered tommorow if you meet the Quota of: " + dailyQuota);
        } else if (day == 4){
            alert("Congratulation on surviving day " + day + ". Resources will be delivered tommorow if you meet the Quota of: " + dailyQuota);
        } else if (day == 5){
            alert("Congratulation on surviving day " + day + ". Resources will be delivered tommorow if you meet the Quota of: " + dailyQuota);
        } else if (day == 6){
            alert("Congratulation on surviving day " + day + ". Resources will be delivered tommorow if you meet the Quota of: " + dailyQuota);
        } else if (day == 7){
            alert("Congratulation on surviving day " + day + ". Resources will be delivered tommorow if you meet the Quota of: " + dailyQuota);
        } else if (day > 7){
            alert("Congratulation on surviving day " + day + ". You're too far to communicate your discoveries; No resources will be delivered");
        }

        day++;
        hunger -= 2 * day;
        thirst -= 5 * (day / 2);
        sleep = 100;

        if(hunger <= 0 || thirst <= 0){
            alert("You died from lack of resources");
            hunger = 100;
            foodSupply = 100;
            thirst = 100;
            waterSupply = 100;
            sleep = 100; //sleep and actions are similar but sleep is js another way to ramp difficulty
            actions = 3;
            day = 0;
            dailyQuota = 1;
            research = 0;
            // thirstIncrease and conditionIncrease are const and cannot be reassigned
        }

        actions = 3;
        research = 0;
        sleeping = false;
        moveState = true;
    }, 300);
    });
}

function distance(ix, iy){
    a=Math.sqrt(Math.pow(px-waterX, 2) + Math.pow(py - waterY, 2) );
    b=Math.sqrt(Math.pow(px-gardenX, 2) + Math.pow(py - gardenY, 2) );
    d=Math.sqrt(Math.pow(px-bedX, 2) + Math.pow(py - bedY, 2) );
    e=Math.sqrt(Math.pow(px-researchStationX, 2) + Math.pow(py - researchStationY, 2) );
    if(a < wiggleRoom){
        return "water";
    } else if (b < wiggleRoom){
        return "garden";
    } else if (d < wiggleRoom){
        return "bed";
    } else if (e < wiggleRoom){
        return "researchStation";
    } else {
        return "none";
    }
}
