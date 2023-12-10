const reveal = Array.from(document.getElementsByClassName('reveal'))

function isVision(reveal) {
    const { top, bottom } = reveal.getBoundingClientRect()

    if (bottom < 0) {
        return false
    }
    if (top > window.innerHeight) {
        return false
    }
    return true
}

document.addEventListener('scroll', () => {
    reveal.forEach((rev) => {
        if (isVision(rev)) {
            rev.classList.add('reveal_active')
        } else if (!isVision(rev)) {
            rev.classList.remove('reveal_active')
        }
    })
})