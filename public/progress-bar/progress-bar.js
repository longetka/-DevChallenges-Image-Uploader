const progressBar = document.getElementById('progress-bar');

if (window.location.pathname === '/uploading') {
    window.addEventListener('load', () => {
        setTimeout(() => {
            progressBar.style.width = '100%';
            progressBar.style.transition = 'all .5s ease';
        }, 3000)
    })
}


