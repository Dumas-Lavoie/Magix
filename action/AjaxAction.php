<?php
	require_once("action/CommonAction.php");

	class AjaxAction extends CommonAction
	{
		public $result;


		public function __construct()
		{
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		 function execute() {
			$data = [];
			$data["key"] = $_SESSION["key"];
			$data["type"] = "END_TURN";



			$this->result = parent::callAPI("games/action", $data);

		}


		public function executeAction(){
		}
	}
