<?php

require_once("action/AjaxState.php");


$test = new AjaxState();

$test->execute();

echo json_encode($test->result);
