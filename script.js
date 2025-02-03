// Move the Car
function moveCar() {
    let car = document.getElementById("car");
    let position = 0;
    let interval = setInterval(() => {
        if (position >= 200) clearInterval(interval);
        else {
            position += 5;
            car.style.marginLeft = position + "px";
        }
    }, 100);
}

// Change Car Color
function changeCarColor() {
    let car = document.getElementById("car");
    car.style.backgroundColor = car.style.backgroundColor === "red" ? "blue" : "red";
}

// Launch Spaceship
function launchSpaceship() {
    let spaceship = document.getElementById("spaceship");
    let position = 0;
    let interval = setInterval(() => {
        if (position >= 300) clearInterval(interval);
        else {
            position += 5;
            spaceship.style.marginTop = -position + "px";
        }
    }, 100);
}
