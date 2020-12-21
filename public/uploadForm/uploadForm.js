const chooseBtn = document.getElementById('button');
const input = document.getElementById('fileUpload');
const frame = document.getElementById('frameUpload');

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
    let files = dt.files;

    handleFiles(files);
}

function handleFiles(files) {
    ([...files]).forEach(uploadFile)
}

function uploadFile(file) {
    let url = 'http://localhost:8080/';
    let formData = new FormData();

    formData.append('file', file)

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(() => {console.log('File uploaded');})
    .catch(() => {console.log('Error');})
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

chooseBtn.addEventListener('click', (event) => {
    event.preventDefault();
    input.click();
});