const progressBar = document.getElementById('progress-bar');

export default 
    window.addEventListener('load', () => {
        setTimeout(() => {
            progressBar.style.width = '100%';
            progressBar.style.transition = 'all .5s ease';
        }, 3000)
    })


