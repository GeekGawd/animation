  const wheel = document.querySelector('.wheel');
  const button = document.querySelector('.button');
  let deg = 0;

  function startspin(){
    button.style.pointerEvents = 'none';
    deg = Math.floor(1000 + Math.random() * 2000);

    wheel.style.transition = 'all 6s ease-out';

    wheel.style.transform = `rotate(${deg}deg)`;

  }

  function endspin() {

    button.style.pointerEvents = 'auto';
    
    wheel.style.transition = 'none';
    
    const actualDeg = deg % 360;

    wheel.style.transform = `rotate(${actualDeg}deg)`;
  }

  button.addEventListener('click', startspin);

  wheel.addEventListener('transitionend', endspin);
