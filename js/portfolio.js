document.addEventListener('DOMContentLoaded', () => {
    // Portfolio modal logic
    const modal = document.getElementById('portfolio-modal');
    const modalContent = document.getElementById('modal-iframe');
    const closeModal = document.querySelector('.close');

    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', () => {
            const type = item.getAttribute('data-type');
            const src = item.getAttribute('data-src');
            if (type === 'video') {
                modalContent.src = src;
            } else if (type === 'paper') {
                modalContent.src = `https://docs.google.com/gview?url=${src}&embedded=true`;
            } else if (type === 'github') {
                window.open(src, '_blank');
                return;
            }
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        modalContent.src = '';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
            modalContent.src = '';
        }
    });
});
