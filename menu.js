async function loadNavbar(file) {
    let navbar = await fetch(file);
    document.getElementById('navbar-placeholder').innerHTML = await navbar.text();
}

async function loadSettings(file) {
    if(document.getElementById('settingsbar-placeholder').innerHTML == ""){
        let settingsBar = await fetch(file);
        document.getElementById('settingsbar-placeholder').innerHTML = await settingsBar.text();
    } else {
        document.getElementById('settingsbar-placeholder').innerHTML = "";
    }
}

function helpMenu() {
    alert("Keybinds: WASD to move, E to interact \nGoal: x");
}

function speedSetting(){
    if(speedMult == 1){
        speedMult = 2;
    } else {
        speedMult = 1;
    }
}