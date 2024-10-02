<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];

    // Crear la respuesta que se enviará de vuelta al cliente
    $respuesta = "Nombre: " . $nombre . "\nEmail: " . $email;
    
    // Enviar la respuesta
    echo $respuesta;
} else {
    echo "Método no permitido.";
}
?>
