var root=document.querySelector(':root');

function toggleMenu(){
    var button = document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close');

    var menu = document.getElementsByClassName('js-menu');
    menu[0].classList.toggle("active");
}
function fixPhotoOnScroll(){
    var photo = document.getElementById("photo-profile");
    this.scrollY > 50 ? photo.style.marginTop = 0 : photo.style.marginTop = '7-rem';
}
window.addEventListener("scroll", fixPhotoOnScroll, false);
function showImage(image){
    var newImage=document.createElement('img');
    newImage.src=image.src;
    newImage.removeAttribute('onclick');
    var modal=document.getElementById('preview');
    modal.classList.toggle('showModal');
    var existinImage=modal.querySelector('img');
    if(existinImage){
        modal.removeChild(existinImage);
    }
    modal.appendChild(newImage);    
}

function cerrarModal(){
    var modal = document.getElementById('preview');
    modal.classList.remove('showModal')
}
window.addEventListener('scroll', fixPhotoOnScroll);

function showImage(image) {
    // Crear un nuevo elemento de imagen
    var newImage = document.createElement('img');
    newImage.src = image.src; // Asignar la fuente de la imagen
    newImage.removeAttribute('onclick'); // Eliminar cualquier atributo onclick de la imagen

    // Obtener el modal
    var modal = document.getElementById('preview');
    modal.classList.toggle('showModal'); // Alternar la clase para mostrar el modal

    // Verificar si ya existe una imagen en el modal
    var existingImage = modal.querySelector('img');
    if (existingImage) {
        modal.removeChild(existingImage); // Eliminar la imagen existente
    }

    // Agregar la nueva imagen al modal
    modal.appendChild(newImage);
}

function cerrarModal() {
    // Obtener el modal
    var modal = document.getElementById('preview');
    // Eliminar la clase para ocultar el modal
    modal.classList.remove('showModal');
}
