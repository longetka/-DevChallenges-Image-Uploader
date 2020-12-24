const chooseBtn = document.getElementById('button');
const input = document.getElementById('fileUpload');
const frame = document.getElementById('frameUpload');
const form = document.getElementById('form');


chooseBtn.addEventListener('click', (event) => {
    event.preventDefault();
    input.click();
});

input.addEventListener('change', upload, false);

function upload(e) {
    const url = 'http://localhost:8080/upload'; // (1) URL routes.post('url')
    const file = Array.from(e.target.files); // (2) Get the file to upload

    console.log(file);
    const xhr = new XMLHttpRequest(); // Create XMLHttpRequest instance
    const formData = new FormData(); // Create FormData instance

    file.forEach(file => { // Iterate files for multiple file upload 
        formData.append('file', file) // (3) Create form for send to server
    })

    xhr.open('POST', url); // Open request with post method and upload url (1)
    xhr.send(formData); // Send our created form (3) with file (2) to server
    consoloe.log(xhr.upload());
};

// ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
//     frame.addEventListener(eventName, preventDefaults, false)
// });

// ['dragenter', 'dragover'].forEach(eventName => {
//     frame.addEventListener(eventName, highlight, false)
// });

// ['dragleave', 'drop'].forEach(eventName => {
//     frame.addEventListener(eventName, unhighlight, false)
// })

// frame.addEventListener('drop', handleDrop, false)

// function handleDrop(e) {
//     let dt = e.dataTransfer;
//     let files = dt.files;

//     handleFiles(files);
// }

// function handleFiles(files) {
//     ([...files]).forEach(uploadFile)
// }

// function uploadFile(file) {
//     let url = '/';
//     let formData = new FormData();

//     formData.append('file', file)

//     fetch(url, {
//         type: 'POST',
//         data: formData,
//         processData: false,
//         contentType: false,
//     })
//     .then(() => {console.log('File uploaded');})
//     .catch(() => {console.log('Error');})
// }

// function preventDefaults(e) {
//     e.preventDefault()
//     e.stopPropagation()
// };

// function highlight(e) {
//     frame.classList.add('highlight');
// };

// function unhighlight(e) {
//     frame.classList.remove('highlight');
// };
