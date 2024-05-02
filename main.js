let btn = document.querySelector("#btnn");

window.onscroll = function () {
  if (window.scrollY >= 500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
let scroll = document.querySelector("#scroll");
let height = document.documentElement.scrollHeight - document.body.clientHeight;

window.onscroll = function () {
  let scrollTop = document.body.scrollTop;
  scroll.style.width = `${(scrollTop / height) * 100}%`;
};


const stats = document.querySelector(".stats"),
number = document.querySelectorAll(".number")

function countNumber(num) {
  let maxNum = num.dataset.goal
  let count = setInterval(()=>{
    num.textContent++
    if(num.textContent === maxNum) {
      clearInterval(count)
    }
  },10000 / num)
}
let topNum = false
window.onscroll = function () {
  if(window.scrollY >= stats.offsetTop - 500 && !topNum) {
    number.forEach((num)=>countNumber(num))
    topNum = true
  }

}

const skills = document.querySelector(".our-skills"),
progress = document.querySelectorAll(".progress span")

window.onscroll = function () {
  if(window.scrollY >= skills.offsetTop - 200) {
     progress.forEach((prog) => {
      prog.style.width = prog.dataset.width
     })
  }

}