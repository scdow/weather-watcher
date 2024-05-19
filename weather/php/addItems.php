<?php
	//use dbconnect.php to connect to the database
	require_once('dbconnect.php');	
	$uid = $_GET['uid'];
	$wid = $_GET['wid'];
	
	$widArray = explode(',',$wid);
	//insert the new data
	for($i=0; $i<count($widArray);$i++){
		$query = "INSERT INTO userweatherjoin (uid,wid) VALUES ($uid,$widArray[$i])";
		$result = $con->query($query);
	}
	echo $uid;
?>


	