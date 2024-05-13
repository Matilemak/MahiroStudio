document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll('.title-home, .titletext-home');

    function fadeInText(text) {
        text.style.opacity = '0';
        text.style.transform = 'translateX(100px)';
        text.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-in';

        setTimeout(() => {
            text.style.opacity = '1';
            text.style.transform = 'translateX(0)';
        }, 100);
    }

    texts.forEach(text => {
        fadeInText(text);
    });
});

document.addEventListener("DOMContentLoaded", function(){
    let btnEnviar = document.getElementById("btn-enviar");

    btnEnviar.addEventListener("click", function(event){
        event.preventDefault();
        if (validarForm()) {
            mostrarPopup();

            setTimeout(function() {
                ocultarPopup();
            }, 4000);
        }
    });

    function validarForm() {
        let nombre = document.getElementById("nombre").value.trim();
        let apellido = document.getElementById("apellido").value.trim();
        let email = document.getElementById("email").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || apellido === "" || email === "" || mensaje === "") {
            mostrarAlerta("Por favor complete todos los campos del formulario."); // Se pasa el mensaje a mostrarAlerta()
            return false;
        }
        return true;
    }

    function mostrarAlerta() {
        let alerta = document.getElementById("popup-alerta");
        alerta.style.display = "block";
        
        setTimeout(function() {
            alerta.style.display = "none";
        }, 4000);
    }

    function mostrarPopup() {
        let popup = document.getElementById("popup");
        popup.style.display = "block";
    }

    function ocultarPopup() {
        let popup = document.getElementById("popup");
        popup.style.display = "none";
    }
});
