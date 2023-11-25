const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`)

for (let i = 1; i < 10; i ++) {
    hole = getHole(i)
    hole.onclick = () => {
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