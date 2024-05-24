document.addEventListener('DOMContentLoaded', function() {
    var moreLinks = document.querySelectorAll('.more');

    moreLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            var content = this.parentNode.querySelector('.more-content');
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                this.textContent = 'Read less';
            } else {
                content.style.display = 'none';
                this.textContent = 'Read more';
            }
        });
    });
});