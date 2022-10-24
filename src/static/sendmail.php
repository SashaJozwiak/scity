<?php

$recepient = "stroycity@69.tw1.ru";
$sitename = "Scity";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);

$pagetitle = "Новая заявка с сайта "$sitename"";
$message = "Имя: $name \nПочта: $email \nСообщение: $message";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset="utf-8"\n From: $recepient");
