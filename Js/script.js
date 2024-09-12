
document.addEventListener('DOMContentLoaded', function() {
    loadPage('home.html');

    document.querySelectorAll('a[data-page]').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');
            loadPage(page);
        });
    });

    function loadPage(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) throw new Error('Page not found');
                return response.text();
            })
            .then(html => {
                document.getElementById('content').innerHTML = html;
                // Actualiza el URL sin recargar la página
                history.pushState(null, '', page);
            })
            .catch(error => {
                console.error('Error loading the page:', error);
                document.getElementById('content').innerHTML = '<p>Error loading content.</p>';
            });
    }

    window.addEventListener('popstate', function() {
        const page = location.pathname.split('/').pop();
        loadPage(page);
    });
});
