document.addEventListener('DOMContentLoaded', function () {
  let spaceship = document.getElementById('spaceship');
  let fuelElement = document.getElementById('fuel');
  let speedElement = document.getElementById('speed');
  let startBtn = document.getElementById('startBtn');
  let stopBtn = document.getElementById('stopBtn');
  
  let fuel = 1000;
  let speed = 0;
  let spaceshipMoving = false;

  function startSpaceship() {
    if (fuel > 0) {
      spaceshipMoving = true;
      startBtn.classList.add('hidden');
      stopBtn.classList.remove('hidden');
      
      let spaceshipPosition = 10; // Start from the left of the screen
      let spaceshipInterval = setInterval(function () {
        if (spaceshipMoving && fuel > 0) {
          spaceshipPosition += speed / 10;
          fuel -= 0.5; // Decrease fuel as spaceship moves
          fuelElement.textContent = fuel.toFixed(0); // Update fuel display
          speedElement.textContent = speed; // Update speed display
          
          spaceship.style.transform = `translateX(${spaceshipPosition}px)`;
        } else {
          clearInterval(spaceshipInterval); // Stop spaceship when fuel is out
          alert("Out of fuel! Please stop.");
        }
      }, 100);
    } else {
      alert("Not enough fuel to start the spaceship.");
    }
  }

  function stopSpaceship() {
    spaceshipMoving = false;
    speed = 0;
    startBtn.classList.remove('hidden');
    stopBtn.classList.add('hidden');
    alert("Spaceship stopped!");
  }

  // Event listeners for buttons
  startBtn.addEventListener('click', function () {
    speed = 100; // Set speed when starting
    startSpaceship();
  });

  stopBtn.addEventListener('click', stopSpaceship);

  // Make the game accessible by allowing keyboard navigation
  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
      speed += 10; // Increase speed when the right arrow key is pressed
    }
    if (event.key === 'ArrowLeft') {
      speed -= 10; // Decrease speed when the left arrow key is pressed
    }
  });
});
