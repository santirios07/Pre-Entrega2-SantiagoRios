/*FUNCION ENVIAR MAIL*/
function sendEmail(){
    let parms = {
        name : document.getElementById("nombre-apellido").value,
        message : document.getElementById("mensaje").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("telefono").value,
    }

    emailjs.send("service_6ib0ttv","template_5ns5iw3",parms).then(alert("Su mensaje ha sido enviado!"))
}