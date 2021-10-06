  const wheel = document.querySelector('.wheel');
  const spinButton = document.querySelector('.button');
  const display = document.getElementById('display');

  let spinAngle = 0;
  let zoneSize = 45;

  const animals = {
    1: "Oops!",
    2: "$100",
    3: "MacBook",
    4: "Give $100",
    5: "1 Crore!",
    6: "$1000",
    7: "Jio Phone",   
    8: "50 Paisa",
  }

  function handleWin (actualspinAngle){
    const spiritanimal = Math.ceil(actualspinAngle/zoneSize);
    display.innerHTML = animals[spiritanimal];
  }

  function startspin(){

    display.innerHTML = "-";

    spinButton.style.pointerEvents = 'none';

    spinAngle = Math.round(3000 + Math.random() * 2000);

    wheel.style.transition = 'all 6s ease-out';

    wheel.style.transform = `rotate(${spinAngle}deg)`;

  }

  spinButton.addEventListener('click', startspin);

  function endspin() {

    spinButton.style.pointerEvents = 'auto';
    
    wheel.style.transition = 'none';
    
    const actualspinAngle = spinAngle % 360;

    wheel.style.transform = `rotate(${actualspinAngle}deg)`;

    handleWin(actualspinAngle);
  }

  wheel.addEventListener('transitionend', endspin);






