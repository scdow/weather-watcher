<?php
	require_once('dbconnect.php');
	$wid = $_GET["wid"];
	$uid = $_GET["uid"];
	
	$query = "INSERT INTO userweatherjoin ( uid, wid ) VALUES ( $uid, $wid )";
//	mysqli_query( $conn, $query );
	$result = $con->query($query);
	echo $uid;
?>