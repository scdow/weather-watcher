<?php
	require_once('dbconnect.php');
	
	$user = $_GET["username"];
	$password = $_GET["password"];
	
	$query = "SELECT * FROM users WHERE username='" . $user . "' AND password='" . $password . "'";
	$result = $con->query($query);// Fetch all the results as an array
	
	while($row = $result -> fetch()){
		echo $row['uid'];
		return;
	}
	
	echo '-99';
?>