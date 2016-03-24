<?php
//redirect to thank you page
//if information is not entered properly send to error page
//submit an confirmation email to me

  $name = $_GET["name"];
  $email = $_GET["email"];
  $msg = $_GET["msg"];

  $email_body = "";
  $email_body .= "Name " . $name . "\n";
  $email_body .= "Email " . $email . "\n";
  $email_body .= "Message " . $msg . "\n";

  header("location:sent.html");

?>
