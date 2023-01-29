let score = document.querySelector('.score');
let gameScreen = document.querySelector('.gameScreen');
let startScreen = document.querySelector('.startScreen');


startScreen.addEventListener('click', startGame);

document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyReleased);


let controls = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

let player = {
    speed: 5, // 5px per sec
    score: 0,
    start: false
}


function start(){
    //  console.log("Car")
    let car = document.querySelector('.car');
    let road = gameScreen.getBoundingClientRect();

    //move the car
    if(controls.ArrowUp && player.y > road.top){
        player.x -= player.speed;
    }
    if(controls.ArrowDown && player.y < road.bottom){
        player.x += player.speed;
    }
    if(controls.ArrowLeft && player.x > road.left){
        player.y -= player.speed;
    }
    if(controls.ArrowRight && player.x < road.right){
        player.y += player.speed;
    }
    
    if(player.start){
       car.style.top = player.x + "px";
       car.style.left = player.y + "px";
       requestAnimationFrame(start);
    }
}

function keyPressed(e){
console.log(e.key);
    if(controls[e.key] == false){
      controls[e.key] = true;
      
    }
}

function keyReleased(e) {
    console.log(e.key)
    if(controls[e.key] == true){
        controls[e.key] = false;
        
      }
}

// startScreen.classList.add('hide');
function startGame() {
    //  console.log("Clicked")
     player.start = true;
    // add or remove a calss from certain element
    //  console.log(startScreen.classList)
     startScreen.classList.add('hide');
     gameScreen.classList.remove('hide');

     // create a car

     let car = document.createElement('div');
     car.setAttribute('class', 'car');
     car.innerText = "Car";
    //  car.style.left = "10px";
    //  car.style.top = "10px";
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    car.style.backgroundImage = "url(https://th.bing.com/th/id/R.a8cdf76e7ea55b897c68d69795c50a32?rik=QV4tJYLTAmjWcQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fcar-png-top-view-png-hatchback-car-top-view-png-clipart-1092.png&ehk=vFIujLyNHnK%2flCP811KrYP%2bgpSNP3ozt8z7T2Ebsz14%3d&risl=&pid=ImgRaw&r=0)";
    car.style.backgroundSize = 'cover';
    gameScreen.appendChild(car);

     requestAnimationFrame(start)
}