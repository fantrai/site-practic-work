<?php

require_once("settings.php");
$connection = new PDO("mysql:host=$host;dbname=$database", $user, $pass);

$data = json_decode(file_get_contents('php://input'), true);
$login = $data['login'];
$password = $data['password'];
$email = $data['email'];
$sex = $data['sex'];

$query = "INSERT User (login, password, email, sex) VALUES ('$login', '$password', '$email', '$sex')";

$connection->exec($query);

http_response_code('201');
header('Content-Type: application/json');
print json_encode(array('message' => 'User created'));
