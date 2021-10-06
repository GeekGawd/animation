  const wheel = document.querySelector('.wheel');
  const spinButton = document.querySelector('.button');
  const display = document.getElementById('display');

  let spinAngle = 0;
  let zoneSize = 45;

  const animals = {
    1: "Frog",
    2: "Snail",
    3: "Dolphin",
    4: "Ladybug",
    5: "Koala",
    6: "Unicorn",
    7: "Dragon",   
    8: "Snowman",
  }

  function handleWin (actualspinAngle){
    const spiritanimal = Math.ceil(actualspinAngle/zoneSize);
    display.innerHTML = animals[spiritanimal];
  }

  function startspin(){

    display.innerHTML = "-";

    spinButton.style.pointerEvents = 'none';

    spinAngle = Math.round(1000 + Math.random() * 2000);

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






