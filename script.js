function nextPage(pageNumber) {
    const currentPage = document.querySelector('.container:not([style*="display: none"])');
    currentPage.classList.add('hidden');
    setTimeout(() => {
        currentPage.style.display = 'none';
        const nextPage = document.getElementById(`page${pageNumber}`);
        nextPage.style.display = 'flex';
        setTimeout(() => {
            nextPage.classList.remove('hidden');
        }, 10);
    }, 1000);
}

function previousPage(pageNumber) {
    const currentPage = document.querySelector('.container:not([style*="display: none"])');
    currentPage.classList.add('hidden');
    setTimeout(() => {
        currentPage.style.display = 'none';
        const previousPage = document.getElementById(`page${pageNumber}`);
        previousPage.style.display = 'flex';
        setTimeout(() => {
            previousPage.classList.remove('hidden');
        }, 10);
    }, 1000);
}
