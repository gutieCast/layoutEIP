const parallax = document.getElementsByClassName('section'[0]);
let spaceToType = document.querySelector("#type-animation")
const toType = ["escribo poesía."];
let textPosition = 0;
let speed = 100;

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const typewriter = async () => {
    spaceToType.innerHTML = toType[0].substring(0, textPosition) + '<span class="blinker">\u25AE</span>';
  
    if (textPosition++ != toType[0].length) {
      setTimeout(typewriter, speed);
    } else {
      await delay(1700);
      textPosition = 0;
      typewriter()
    }
}

window.addEventListener("load", typewriter)

