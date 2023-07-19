let btn = document.querySelectorAll(".btn");
let iBtn = document.querySelector("i");
let reg = document.querySelector(".reg");

btn.forEach((item) => {
    item.addEventListener("click", () => {
        reg.classList.add('active');
    });
})

iBtn.addEventListener("click", () => {
    reg.classList.toggle('active');
});