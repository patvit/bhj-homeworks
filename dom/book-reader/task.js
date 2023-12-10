const sizeArr = Array.from(document.querySelectorAll('.font-size'))
const book = document.getElementById('book')

sizeArr.forEach((size) => {
    size.addEventListener('click', (event) => {
        document.querySelector('.font-size_active').classList.remove('font-size_active')
        size.classList.add('font-size_active')
        const dataSize = size.getAttribute('data-size');
        book.classList.remove('book_fs-null', 'book_fs-big', 'book_fs-small');
        book.classList.add(`book_fs-${dataSize}`);
        event.preventDefault()
    })
})