document.addEventListener('DOMContentLoaded', function() {
    function validateForm() {
        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        var loginEmail = document.getElementById("loginEmail");
        var loginPassword = document.getElementById("loginPassword");
        var registerError = document.getElementById("registerError");
        var loginError = document.getElementById("loginError");

        var errorMessage = "";

        if (nombre && nombre.value === "") {
            errorMessage += "Por favor, introduzca su nombre.<br>";
        }

        if (apellido && apellido.value === "") {
            errorMessage += "Por favor, introduzca su apellido.<br>";
        }

        if (email && email.value === "") {
            errorMessage += "Por favor, introduzca su correo electrónico.<br>";
        }

        if (password && password.value === "") {
            errorMessage += "Por favor, introduzca su contraseña.<br>";
        }

        if (loginEmail && loginEmail.value === "") {
            errorMessage += "Por favor, introduzca su correo electrónico para iniciar sesión.<br>";
        }

        if (loginPassword && loginPassword.value === "") {
            errorMessage += "Por favor, introduzca su contraseña para iniciar sesión.<br>";
        }

      
        registerError.innerHTML = errorMessage;

        
        return errorMessage === "";
    }

    var botonRegistrarse = document.getElementById('botonRegistrarse');
   
    if (botonRegistrarse) {
        botonRegistrarse.addEventListener('click', function(event) {
           
            event.preventDefault();

        
            if (validateForm()) {
            
                var registroExitoso = document.getElementById('registroExitoso');
                if (registroExitoso) {
                    registroExitoso.style.display = 'block';
                }
            }
        });
    }
});
