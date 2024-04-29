<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
//require 'vendor/autoload.php';
$mail = new PHPMailer(true);
try {
	$mail->SMTPDebug = 2;									
	$mail->isSMTP();											
	$mail->Host	 = 'smtp.gmail.com;';					
	$mail->SMTPAuth = true;							
	$mail->Username = 'bkpandey.pandey@gmail.com';				
	$mail->Password = 'nwjwrjvhuyrmdnmw';						
	$mail->SMTPSecure = 'tls';							
	$mail->Port	 = 587;
	$mail->setFrom('bkpandey.pandey@gmail.com', 'Customer enquiry forms details');		
	$mail->addAddress($_POST["email"]);
	$mail->isHTML(true);								
	$mail->Subject = 'Customer contact forms details';
	$mail->Body = "<b>Name:".$_POST["name"]."<br>"."<b>Email:</b>".$_POST["name"]."<br>"."<b>Phone:</b>".$_POST["phone"]."<br>"."<b>Subject:</b>".$_POST["subject"]."<br>"."<b>Message:</b>".$_POST["message"]."<br>"."<h3>The company Address is </h3>"."<img src='https://www.tops-int.com/images/TOPS-logo.png'>"."<br>"."<p><b>Office Address </b>: 3rd Fl Aval Complex, University Rd,<br> Panchayat Nagar Chowk, Rajkot, Gujarat 360005
	<b>Open time :</b> Open 8:30am to 7:30pm<br>
	<b>Email us : </b> <a href='mailto:info@tops-int.com'>info@tops-int.com</a></p>";
	// $mail->AltBody = 'Body in plain text for non-HTML mail clients';
	$mail->send();
	echo "<h3 align='center'>Mail has been sent successfully!</h3>";
	header("refresh:4,index.html");
} catch (Exception $e) {
	echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>
