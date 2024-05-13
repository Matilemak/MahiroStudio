<?php

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$destinatario = "matias.alcayagac@gmail.com";
$asunto = "Mensaje de Mahiro Studio"

$carta = "De: $nombre \n";
$carta .= "De: $apellido \n";
$carta .= "De: $email \n";
$carta .= "De: $mensaje \n";

mail($destinatario, $asunto, $carta);

?>