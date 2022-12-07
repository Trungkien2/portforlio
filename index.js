const container = document.querySelector(".container");
const loader = document.querySelector(".loading-container");
const techSkillContainer = document.querySelector(".tech-skill");
let progessbars = document.querySelector(".progerrsbar");
let welcome = document.querySelector(".welcome-container");
let welcome2 = document.querySelector(".welcome-container2");
let welcome3 = document.querySelector(".welcome-container3");

welcome2.style.display = "none";
welcome3.style.display = "none";

window.addEventListener("load", () => {
  setTimeout(showPage, 3000);
  setTimeout(showPage2, 5000);
  setTimeout(showPage3, 7000);
  move();
});

const showPage = () => {
  welcome.style.display = "none";
  welcome2.style.display = "block";
};
const showPage2 = () => {
  welcome2.style.display = "none";
  welcome3.style.display = "block";
};
const showPage3 = () => {
  welcome3.style.display = "none";
  container.style.display = "block";
};
const move = () => {
  let i = 0;
  if (i == 0) {
    i = 1;

    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        loader.style.display = "none";
        welcome.style.display = "block";
      } else {
        width++;
        welcome.style.display = "none";

        progessbars.style.width = width + "%";
      }
    }
  }
};
window.scrollTo({
  top: 1000,
  behavior: "auto" | "smooth",
});
