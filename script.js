const target = document.querySelectorAll(".tab")
const button = document.querySelectorAll(".button-main")

for (let i = 0; i < 4; i++) {
    target[i].style.display = "none";

    console.log(target[i])
}

target[0].style.display = "block";

button[0].onclick = function() {
    console.log("click")
}