document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const container = document.querySelector('.carrossel-container');
    const items = document.querySelectorAll('.carrossel-item');
    let index = 0;

    function showSlide(n) {
        if (n >= items.length) index = 0;
        if (n < 0) index = items.length - 1;
        container.style.transform = `translateX(${-index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        index--; // Decrementa o índice
        showSlide(index);
    });

    nextButton.addEventListener('click', () => {
        index++; // Incrementa o índice
        showSlide(index);
    });

    // Move para a próxima slide a cada 10 segundos
    setInterval(() => {
        index++; // Incrementa o índice
        showSlide(index);
    }, 2000); // 10.000 milissegundos = 10 segundos
});
