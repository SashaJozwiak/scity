<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguafe('ru', 'phpmailer/language');
$mail->isHTML(true);

//От кого письмо
$mail->setFrom('stroycity@69.tw1.ru', 'Письмо');
//Кому письмо
$mail->addAdress('stroycity@69.tw1.ru');
//Тема
$mail->Subject = 'Обратная связь';

$body = 'Имя: '.$_POST['name'].'<br>';
$body.='Почта: '.$_POST['email'].'<br>';
$body.='Сообщение: '.$_POST['email'].'<br>';

$mail->Body = $body;

if (!$mail->send()) {
  $message = 'Ошибка';
} else {
  $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>