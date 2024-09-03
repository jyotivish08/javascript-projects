document.onkeydown = function (e) {
  console.log("key code is ", e.keyCode);
  if (e.keyCode === 38) {
    // Up arrow key
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  }
};
