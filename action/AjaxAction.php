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

			$data["type"] = $_POST["type"];

			$UID = $_POST["UID"];
			$TUID = $_POST["UIDAC"];

			if ($UID != null)
			{
				$data["uid"] = $UID;
			}
			if($TUID != null)
			{
				$data["targetuid"] = $TUID;
			}



			$this->result = parent::callAPI("games/action", $data);

		}


		public function executeAction(){
		}
	}
