<?php
session_start();

$_SESSION["game"] = "online";
header('Location: jeu.php');
exit();
