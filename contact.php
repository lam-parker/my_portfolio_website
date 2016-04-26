<?php
//redirect to thank you page
//if information is not entered properly send to error page
//submit an confirmation email to me

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

  $name = $_POST["name"];
  $email = $_POST["email"];
  $msg = $_POST["msg"];

  $email_body = "";
  $email_body .= "Name " . $name . "\n";
  $email_body .= "Email " . $email . "\n";
  $email_body .= "Message " . $msg . "\n";

  $user = 'root';
  $password = 'root';
  $db = 'interested_db_1';
  $host = 'localhost';
  $port = 3306;

  $link = mysqli_init();
  $success = mysqli_real_connect(
   $link,
   $host,
   $user,
   $password,
   $db,
   $port
);

 $result = mysqli_query($link, "INSERT INTO `Form`(`Full Name`, `Email Address`, `Message`) VALUES ('$name','$email','$msg')");


 header("location:sent.html");


?>
