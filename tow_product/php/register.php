<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin:*");
$userName = $_POST["userName"];
$password = $_POST["password"];
$conn = new mysqli("","root");
$conn ->select_db("atsc");
$sql = "select * from user where userName = '$userName'";
$result = $conn->query($sql);
if($result->num_rows == 0){
	echo "1";
	$sql = "insert into user (userName,password) values ('$userName','$password')";
	$conn->query($sql);
}else{
	echo "0";
}

?>