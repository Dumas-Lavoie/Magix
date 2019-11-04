<?php
session_start();

$_SESSION["game"] = "pratique";
header('Location: jeu.php');
exit();
