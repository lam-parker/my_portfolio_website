<?php
//redirect to thank you page
//if information is not entered properly send to error page
//submit an confirmation email to me

  $name = $_POST["name"];
  $email = $_POST["email"];
  $msg = $_POST["msg"];

  header("location:sent.html");

  echo "<pre>";
  $email_body = "";
  $email_body .= "Name " . $name . "\n";
  $email_body .= "Email " . $email . "\n";
  $email_body .= "Message " . $msg . "\n";
  echo $email_body;
  echo "</pre>";

?>
