const time = document.getElementById("timer")
const timeBegin = time.textContent
let timerId = setInterval(() => {
    time.textContent = Number(time.textContent) - 1
}, 1000);

setTimeout(() => { clearInterval(timerId); alert('Вы победили в конкурсе!'); }, Number(timeBegin) * 1000);
