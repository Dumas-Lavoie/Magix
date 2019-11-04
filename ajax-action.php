<?php

require_once("action/AjaxAction.php");


$test = new AjaxAction();

$test->execute();

echo json_encode($test->result);
