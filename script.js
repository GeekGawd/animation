  const wheel = document.querySelector('.wheel');
  const spinButton = document.querySelector('.button');
  let spinAngle = 0;

  function startspin(){
    spinButton.style.pointerEvents = 'none';

    spinAngle = Math.floor(1000 + Math.random() * 2000);

    wheel.style.transition = 'all 6s ease-out';

    wheel.style.transform = `rotate(${spinAngle}deg)`;

  }

  spinButton.addEventListener('click', startspin);

  function endspin() {

    spinButton.style.pointerEvents = 'auto';
    
    wheel.style.transition = 'none';
    
    const actualspinAngle = spinAngle % 360;

    wheel.style.transform = `rotate(${actualspinAngle}deg)`;
  }

  wheel.addEventListener('transitionend', endspin);






