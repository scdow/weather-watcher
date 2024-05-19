<?php
	require_once('dbconnect.php');
	$wid = $_GET["wid"];
	$uid = $_GET["uid"];
	
	$query = "delete from userweatherjoin where uid = '$uid' && wid = '$wid'";

//	mysqli_query( $conn, $query );
	$result = $con->query($query);
	echo $uid;
?>