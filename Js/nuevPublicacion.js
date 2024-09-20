//==================== validaciones de formulario================
const form = document.getElementById("publicationForm");
const imageFile = document.getElementById("imageFile");
const videoFile = document.getElementById("videoFile");
const textArea = document.getElementById("exampleFormControlTextarea1");
const btnSubmit= document.getElementById("btnPublicar");

document.addEventListener("DOMContentLoaded", function(){
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let isValid = true;

        // Ocultar mensajes de error si ya existen

        clearErrorMessages();

        // Validar la imagen
        if (!validateImage()) {
            showError(imageFile, "Debe cargar una imagen válida.");
            isValid = false;
        }

        // Validar el video (opcional)
        if (!validateVideo()) {
            showError(videoFile, "Debe cargar un video válido.");
            isValid = false;
        }

        // Validar el campo de texto
        if (textArea.value.trim().length === 0) {
            showError(textArea, "Debe escribir algo en la publicación.");
            isValid = false;
        }

        // Si el formulario no es válido
        if (!isValid) {
            swal({
                title: "¡Falta información!",
                text: "Por favor, revise los campos antes de enviar.",
                icon: "warning",
                button: "Revisar campos",
            });
            return;
        }

        // Si es válido
        swal({
            title: "¡Publicación exitosa!",
            text: "Su publicación ha sido realizada con éxito.",
            icon: "success",
            button: "OK",
        });
    });

    // Función para validar la imagen
    function validateImage() {
        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        return imageFile.files.length > 0 && allowedExtensions.test(imageFile.value);
    }

    // Función para validar el video (opcional)
    function validateVideo() {
        const allowedExtensions = /(\.mp4|\.mov|\.avi|\.wmv)$/i;
        return videoFile.files.length > 0 && allowedExtensions.test(videoFile.value);
    }

    // Mostrar mensaje de error
    function showError(inputElement, message) {
        const errorElement = document.createElement("div");
        errorElement.className = "text-danger";
        errorElement.textContent = message;
        inputElement.parentElement.appendChild(errorElement);
    }

    // Limpiar los mensajes de error
    function clearErrorMessages() {
        const errors = document.querySelectorAll(".text-danger");
        errors.forEach(function(error) {
            error.remove();
        });
    }
});

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'my_cloud_name', 
    uploadPreset: 'my_preset'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
      }
    }
  )
  
  document.getElementById("upload_widget").addEventListener("click", function(){
      myWidget.open();
    }, false);
  