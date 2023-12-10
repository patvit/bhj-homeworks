const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'))

function elemRotator(index) {
    setInterval(() => {
        if (index == rotatorCase.length) {
            index = 0
        }
        if (rotatorCase[index].className.includes('rotator__case_active')) {
            if (rotatorCase.length - 1 > index) {
                let currentColor = rotatorCase[index + 1].getAttribute('data-color')
                rotatorCase[index].classList.remove('rotator__case_active')
                rotatorCase[index + 1].classList.add('rotator__case_active')
                rotatorCase[index + 1].style.color = currentColor
                return false
            } else if (rotatorCase.length - 1 == index) {
                let currentColor = rotatorCase[0].getAttribute('data-color')
                rotatorCase[index].classList.remove('rotator__case_active')
                rotatorCase[0].classList.add('rotator__case_active')
                rotatorCase[0].style.color = currentColor
                return false
            }
        }
        index++
    }, 1000)
}

elemRotator(0)