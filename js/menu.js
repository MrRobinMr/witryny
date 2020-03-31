var bun = document.getElementById("butm");
var mob = document.getElementById("mobile");
bun.addEventListener("click", function () {
    bun.classList.toggle("show");
    mob.classList.toggle("hidden")
})