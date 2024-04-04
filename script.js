document.addEventListener('DOMContentLoaded', function() {
    var book = document.getElementById('book');

    book.addEventListener('click', function() {
        book.classList.toggle('open');
    });
});