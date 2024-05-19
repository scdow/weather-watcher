<?php
require_once('dbconnect.php');
$query = "select * from weather";
//Write the necessary PHP to run the query and formulate the returned values into a
//string to be output using the echo command. e.g.
$result = $con->query($query);
While ($row = $result->fetch()){
echo $row['town'] . " ";
echo $row['summary'] . "<br>";
}