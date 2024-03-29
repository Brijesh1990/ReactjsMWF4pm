<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer;
use PHPMailer\SMTP;
use PHPMailer\Exception;

//Load Composer's autoloader
// require 'vendor/autoload.php';
//Create an instance; passing `true` enables exceptions
// when user submitted form set button
if(isset($_POST["send"]))
{
   require_once("PHPMailer.php");
   require_once("SMTP.php");
   require_once("Exception.php");
try {
    $mail = new PHPMailer(true);
    // stored each information of form inside of variables 
    $nm=$_POST["name"];
    $em=$_POST["email"];
    $sub=$_POST["subject"];
    $ph=$_POST["phone"];
    $comm=$_POST["comment"];
    //Server settings
    $mail->SMTPDebug = false;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'brijeshpandey.tops@gmail.com';                     //SMTP username
    $mail->Password   = 'jgvr iiqq qxbs ntfv';                               //SMTP password
    $mail->SMTPSecure = "tls";            //Enable implicit TLS encryption
    $mail->Port       = 587; //465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($_POST["email"], 'contact us form details');
    $mail->addAddress('brijeshpandey.tops@gmail.com', 'Tops technology');     //Add a recipient
    // $mail->addAddress('ellen@example.com');               //Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Users contact us form details';
    $mail->Body    = "<img src='https://lordicon.com/icons/wired/lineal/177-envelope-send.gif'>"."<br>".$nm."<br>".$em."<br>".$sub."<br>".$ph."<br>".$comm;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo "<script>
    alert('Thanks for contact with us we will recived your email our one of admin will contact with you Soon')
    window.location='contactus.html';
    </script>";
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

}