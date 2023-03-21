function validarFormulario() {
    var nombre = document.forms["formulario"]["nombre"].value;
    var correo = document.forms["formulario"]["correo"].value;

    if (nombre == "" || correo == "") {
        alert("Por favor, llene todos los campos requeridos.");
        return false;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    // Si llegamos aquí, el formulario es válido
    return true;
}