const text = document.querySelectorAll('.poem-container');

document.addEventListener(text, (event) => {
    event.preventDefault();
}, false);

document.addEventListener("copy", (event) => {
    // Change the copied text if you want
    event.clipboardData.setData("text/plain", "No se permite copiar en esta página web");
    
    // Prevent the default copy action
    event.preventDefault();
}, false);


