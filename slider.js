let slider = document.getElementById("slider");
let ForwardButton = document.getElementById("flecha_forward");
// let BackButton = document.getElementById("flecha_back");

ForwardButton.addEventListener("click", handleClickForward);
//BackButton.addEventListener("click", handleClickBack);

let position = 0;
function handleClickForward() {
  if (position < 2850) {
    position = position + 570;
    console.log(position);
    slider.style.transform = `translateX(-${position}px)`;
  }
}

function handleClickBack() {
  position = position - 570;
  console.log(position);
  slider.style.transform = `translateX(-${position}px)`;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Tab") {
    event.preventDefault(); // Prevent default tab behavior
    handleClickForward();
  }
});
