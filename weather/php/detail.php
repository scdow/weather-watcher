<?php
	require_once('dbconnect.php');
	$wid = $_GET["wid"];
	$uid = $_GET["uid"];

	$query = "select * from weather where wid = ". $wid ."";
	$result = $con->query($query);
	$row = $result->fetch();
	
	echo "<div id='detail_city_name'> ". $row['town'] ." </div>";
	
	echo "<table class='detail_weather'>";
		
	echo "<tr>";
	echo "<td>Current temperature</td>";
	echo "<td>".$row['currTemp']."</td>";
	echo "</tr>";
	
	echo "<tr>";
	echo "<td>Summary</td>";
	echo "<td>".$row['summary']."</td>";
	echo "</tr>";
	
	echo "<tr>";
	echo "<td>Low/High</td>";
	echo "<td>".$row['min_temp']."/".$row['max_temp']."</td>";
	echo "</tr>";
	
	echo "<tr>";
	echo "<td>Outlook</td>";
	echo "<td>".$row['outlook']."</td>";
	echo "</tr>";
	
	echo "<tr>";
	echo "<td>Tomorrow</td>";
	echo "<td>".$row['tomorrow']."</td>";
	echo "</tr>";
	
	echo "</table>";
	
	echo "<div class='right'><button onclick='doRemove(". $wid ."," . $uid .")' id='remove_button'> REMOVE </button></div>";
	
//	echo "<button id=\"removeButton\" onclick=\"deleteItem(" . $uid. "," . $wid.")\">Delete</button>";
?>