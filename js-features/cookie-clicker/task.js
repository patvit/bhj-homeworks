const img = document.getElementById("cookie")
const counter = document.getElementById("clicker__counter")

img.onclick = () => {

    counter.textContent = Number(counter.textContent) + 1

    if (Number(counter.textContent)%2) {

    img.width = img.width * 2
    img.height = img.height * 2
    }
    else {
        img.width = img.width / 2
        img.height = img.height / 2
    }

}