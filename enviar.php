<?php

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$destinatario = "contacto@mahirostudio.cl";
$asunto = "Mensaje de web Mahiro Studio"

$carta = "De: $nombre \n";
$carta .= "De: $apellido \n";
$carta .= "De: $email \n";
$carta .= "De: $mensaje \n";

mail($destinatario, $asunto, $carta);

?>