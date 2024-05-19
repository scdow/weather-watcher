<?php
	require_once('dbconnect.php');
	$uid = $_GET["uid"];
	
	echo "<div id='detail_city_name'> Select towns to add: </div>";
	
	$query = "select * from weather where wid not in (select wid from userweatherjoin where uid = '". $uid ."') ";
	$result = $con->query($query);
	while($row = $result->fetch()){
		echo "<input type='checkbox' id='' value='".$row['wid']."'>";
		echo  $row['town'];
		echo "<br>";
	}
	
	echo "<button onclick='doOk(". $uid.")' id='ok_button'> OK </button>";
	
