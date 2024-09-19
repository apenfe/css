<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Configurar el destinatario del correo (tu email)
    $to = "a@a.es";

    // Asunto del correo
    $to = "Nuevo mensaje del formulario de contacto";

    // Cuerpo del mensaje
    $cuerpo = "Nombre: " . $name . "\n";
    $cuerpo .= "Correo electrónico: " . $email . "\n";
    $cuerpo .= "Mensaje:\n" . $message;

    // Encabezados del correo
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Enviar el correo
    if (mail($to, $asunto, $cuerpo, $headers)) {
        echo "El correo se ha enviado correctamente.";
    } else {
        echo "Hubo un problema al enviar el correo.";
    }
}
