<?php
try {
$con = new PDO('mysql:host=localhost;dbname=COMPX322',
'root', '');
} catch (PDOException $e) {
echo "Database connection error: " . $e->getMessage();
die();
}