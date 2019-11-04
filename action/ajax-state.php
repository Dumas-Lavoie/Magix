<?php

use function YoastSEO_Vendor\GuzzleHttp\json_encode;

require_once("../action/CommonAction.php");

class AjaxState extends CommonAction
{
	public $wrongLogin = false;
	public $estConnecte = false;
    public $key;


	public function __construct()
	{
		parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
	}

	 function executeAction() {
        $data = [];
        $data["key"] = $_SESSION["key"];
        
        

        $result = parent::callAPI("games/state", $data);

        $test = json_encode($result);
        var_dump($test);
        exit();
        // $_POST =;
	}

}


$test = new AjaxState();

$test->executeAction();


