function spaceForward() {
    let varPosition = 0;
    let spacePosition = document.getElementById("space");
    // let fxnId = setInterval(spaceMove, 1);
    let fxnId = setInterval(spaceMove, 1);
    function spaceMove() {
      varPosition += 0.3;
      spacePosition.style.backgroundPositionY = varPosition + "px";
    }
  }
  
  function spaceZoom() {
    let spaceScale = 1;
    let asteroidScale = 1;
    let asteroidTranslate = 0;
    let asteroidRotate = 0;
    let cometScale = 1;
    let cometTranslateX = 0;
    let cometTranslateY = 0;
    let surfaceTranslate = 0;
    let earthScale = 1;
    let earthTranslate = 0;
    let earthRotate = 0;
    let moonScale = 1;
    let moonTranslate = 0;
    let moonRotate = 0;
    let spaceZoom = document.getElementById("space");
    let asteroidZoom = document.getElementById("asteroid");
    let cometZoom = document.getElementById("comet");
    let earthZoom = document.getElementById("earth");
    let moonZoom = document.getElementById("moon");
    let surfaceZoom = document.getElementById("surface")
  
    setInterval(spaceShift, 80);
    function spaceShift() {
      spaceScale += 0.0039;
      asteroidScale += 0.05;
      asteroidTranslate += 5;
      asteroidRotate += 3;
      cometScale += 0.01;
      cometTranslateX -= 9;
      cometTranslateY += 3;
      earthScale += 0.02;
      earthTranslate -= 0.3;
      earthRotate += 2;
      moonScale += 0.02;
      moonTranslate -= 0.15;
      moonRotate -= 11;
      surfaceTranslate += 10;
      spaceZoom.style.transform = "scale(" + spaceScale + ")";
      asteroidZoom.style.transform = "scale(" + asteroidScale + ")" + "translate(" + asteroidTranslate + "px) rotate(" + asteroidRotate + "deg)";
      cometZoom.style.transform = "scale(" + cometScale + ")" + "translate(" + cometTranslateX + "px," + cometTranslateY + "px) scale(" + cometScale + ")";
      earthZoom.style.transform = "scale(" + earthScale + ") translate(" + earthTranslate + "px)" + "rotate(" + earthRotate + "deg)";
      moonZoom.style.transform = "scale(" + moonScale + ") translate(" + moonTranslate + "px)" + "rotate(" + moonRotate + "deg)";
      surfaceZoom.style.transform = "translate( -50%," + surfaceTranslate + "px)";
  
    }
  }
  
  function ufoTravel() {
    let ufoPositionX = 0;
    let ufoRotate = 0;
    let flag = 1;
    let ufoTranslate = document.getElementById("ufo");
    let fxnId = setInterval(ufoMove, 10);
    function ufoMove() {
      if (flag == 1) {
        ufoPositionX++;
        ufoRotate -= 0.2;
        ufoTranslate.style.transform = "translate(" + ufoPositionX + "px, -50%) rotate(" + ufoRotate + "deg)";
        if (ufoPositionX == 80) {
          flag = 2;
        }
      }
      if (flag == 2 || flag == -2) {
        if (flag == 2) {
          ufoPositionX--;
          ufoRotate += 0.2;
          ufoTranslate.style.transform = "translate(" + ufoPositionX + "px, -50%) rotate(" + ufoRotate + "deg)";
          if (ufoPositionX == 0) {
            flag = -1;
          }
        }
        if (flag == -2) {
          ufoPositionX++;
          ufoRotate -= 0.2;
          ufoTranslate.style.transform = "translate(" + ufoPositionX + "px, -50%) rotate(" + ufoRotate + "deg)";
          if (ufoPositionX == 0) {
            flag = 1;
          }
        }
      }
      if (flag == -1) {
        ufoPositionX--;
        ufoRotate += 0.2;
        ufoTranslate.style.transform = "translate(" + ufoPositionX + "px, -50%) rotate(" + ufoRotate + "deg)";
        if (ufoPositionX == -80) {
          flag = -2;
        }
      }
    }
  }
  