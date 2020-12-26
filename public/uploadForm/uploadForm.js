const chooseBtn = document.getElementById('button');
const input = document.getElementById('fileUpload');
const frame = document.getElementById('frameUpload');
const url = 'http://localhost:8080/upload'; // (1) URL routes.post('url')
const xhr = new XMLHttpRequest(); // Create XMLHttpRequest instance
const formData = new FormData(); // Create FormData instance

if (window.location.pathname === '/') {

    // Click upload file(s)

    chooseBtn.addEventListener('click', (event) => {
        event.preventDefault();
        input.click();
    });

    input.addEventListener('change', handleClick, false);

    function handleClick(e) {
        const file = Array.from(e.target.files); // (2) Get the file to upload
        upload(file[0]);
    };

    // Drag and drop upload file(s)

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        frame.addEventListener(eventName, preventDefaults, false)
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        frame.addEventListener(eventName, highlight, false)
    });

    ['dragleave', 'drop'].forEach(eventName => {
        frame.addEventListener(eventName, unhighlight, false)
    })

    frame.addEventListener('drop', handleDrop, false)

    function handleDrop(e) {
        let dt = e.dataTransfer;
        let file = Array.from(dt.files);
        upload(file[0]);
    }

    // Deliver file(s) to server
    function upload(file) {
        formData.append('file', file) // (3) Create form for send to server

        xhr.open('POST', url); // Open request with post method and upload url (1)
        xhr.send(formData); // Send our created form (3) with file (2) to server
    }

    function preventDefaults(e) {
        e.preventDefault()
        e.stopPropagation()
    };

    function highlight(e) {
        frame.classList.add('highlight');
    };

    function unhighlight(e) {
        frame.classList.remove('highlight');
    };
}