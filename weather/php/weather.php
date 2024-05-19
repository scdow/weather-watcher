<?php
	require_once('dbconnect.php');
	$uid = $_GET["uid"];
	
	$query0 = "SELECT username from users where uid = ". $uid ."";
	$result0 = $con->query($query0);
	$row0 = $result0 ->fetch();
	
	echo "<div id= 'show_weather'>";
		
	echo "<div id='name_weather'> ". $row0['username'] ." 's Weather: </div>";
	
	$query1 = "SELECT * FROM userweatherjoin WHERE uid='" . $uid . "'";
	$result1 = $con->query($query1);// Fetch all the results as an array
	
	echo "<table class='simple_weather'>";
	echo "<tr>";
	echo "<th>Town</th>";
	echo "<th>CurrTemp</th>";
	echo "<th>Summary</th>";
	echo "</tr>";
	while($row = $result1 -> fetch()){
		$wid = $row['wid'];
		$query2 = "SELECT * FROM weather where wid = '" . $wid . "'";
		$result2=$con->query($query2);

		while($row = $result2 -> fetch()){
			echo "<tr onclick='doDetail(".$wid.",".$uid.")'>";
			echo "<td id='".$wid."'> ".$row['town']." </td>";
			echo "<td> ".$row['currTemp']." </td>";
			echo "<td> ".$row['summary']." </td>";
			echo "</tr>";
		}
	}
	echo "</table>";
	
	echo "</div>";
	
	echo "<div class = 'right'>";
		echo "<button onclick='doAdd(".$uid.")' id='add_button'> ADD </button>";
	echo "</div>";
	
?>