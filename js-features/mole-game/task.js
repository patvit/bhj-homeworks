const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
dead.textContent = 0
lost.textContent = 0

getHole = index => document.getElementById(`hole${index}`)

for (let i = 1; i < 10; i ++) {
    const hole = getHole(i)
    hole.onclick = () => {
        console.log(hole.classList)
        console.log(hole.className)
        if (hole.classList.contains('hole_has-mole') == true) {
            dead.textContent = Number(dead.textContent) + 1
        } else {
            lost.textContent = Number(lost.textContent) + 1
        }
        if (dead.textContent == 10) {
            alert('Победа!')
            dead.textContent = 0
            lost.textContent = 0
            return
        }
        if (lost.textContent == 5) {
            alert('Вы проиграли!')
            dead.textContent = 0
            lost.textContent = 0
            return
        }
    } 
}