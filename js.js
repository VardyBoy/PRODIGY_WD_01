let x = document.querySelectorAll(".aa")
const addHover = (e) => {
  e.target.style.backgroundColor = "blue";
};

const removeHover = (e) => {
  e.target.style.backgroundColor = "";
};
x.forEach(link => {
    link.addEventListener("mouseover", addHover)
    link.addEventListener("mouseout", removeHover)

})
// x.addEventListener("mouseover", f1)