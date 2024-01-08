const droparea = document.getElementById('drop-area');
const inputFile = document.getElementById('input-file');
const imageView = document.getElementById('img-view');
const fileName  = document.getElementById('filename')


inputFile.addEventListener('change', uploadImage);
function uploadImage() {
    const file = inputFile.files[0];
    if (file && isImage(file)) {
        let imgLink = URL.createObjectURL(file);
        console.log(imgLink);
        imageView.style.backgroundImage = `url(${imgLink})`;
        imageView.textContent = '';
        imageView.style.border = 'none';
        fileName.innerHTML = file.name;
    } else {
    
 
        fileName.innerHTML = 'Please upload a valid image file.'
        fileName.style.color = 'red';
     
    }
}

function isImage(file) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    return allowedTypes.includes(file.type);
}

droparea.addEventListener('dragover', (e) => {
    e.preventDefault();
});

droparea.addEventListener('drop', (e) => {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
});
