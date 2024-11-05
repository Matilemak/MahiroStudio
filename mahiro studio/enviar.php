<?php

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$destinatario = "contacto@mahirostudio.cl";

$asunto = "Mensaje de web Mahiro Studio";

$carta = "De: $nombre $apellido \n";
$carta .= "Correo electrónico: $email \n";
$carta .= "Mensaje: $mensaje \n";

$headers = "From: $nombre $apellido <$email>";

if(mail($destinatario, $asunto, $carta, $headers)) {
    echo "El mensaje se ha enviado correctamente.";
} else {
    echo "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
}

?>