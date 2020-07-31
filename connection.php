<?php
//fetch json data to MySQL database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "student_result";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
//check connection
if (mysqli_connect_errno()){
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

$filename= 'data.json';
$data= file_get_contents($filename);
$array= json_decode($data, true);

foreach ($array as $row) {
	$name=$row['name'];
	$maths=$row['marks']['Maths'];
	$eng=$row['marks']['English'];
	$science=$row['marks']['Science'];
	$marks= $maths+$eng+$science;
	$roll_no=$row['rollNumber'];
	$status='Pass';

	if($maths<20 || $eng<20 || $science<20 || $marks<60)
		$status='Fail';


	$query  = " INSERT INTO student_result (name,roll_no,marks,status) VALUES ('$name','$roll_no','$marks',$status) ";

	mysql_query($conn, $query);
}
// echo "Data Inserted Successully!!!"; 
?>