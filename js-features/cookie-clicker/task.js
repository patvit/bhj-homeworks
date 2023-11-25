const img = document.getElementById("cookie")
const counter = document.getElementById("clicker__counter")

img.onclick = () => {
    console.log(counter.textContent)
    counter.textContent = Number(counter.textContent) + 1

}