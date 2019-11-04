<?php
require_once("action/CommonAction.php");


class JeuAction extends CommonAction
{
	public $wrongLogin = false;
	public $estConnecte = false;
	public $key;
	public function __construct()
	{
		parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
	}

	protected function executeAction()
	{


		if ($_SESSION["visibility"] < parent::$VISIBILITY_MEMBER) {
			header("Location: index.php");
			exit();
		}

		$data = [];
		$data["key"] = $_SESSION["key"];
		

		if (isset($_SESSION["game"])) {


			if ($_SESSION["game"] == "pratique") {

				$data["type"] = "TRAINING";

				$result = parent::callAPI("games/auto-match", $data);

				// var_dump($result);
				// exit();

				if ($result == "DECK_INCOMPLETE") {
				} else if ($result == "INVALID_GAME_TYPE") { } else if ($result == "INVALID_KEY") { } else { }
			}
		}



	}

	public function logout()
	{
		if (isset($_SESSION["key"])) {
			$data = array("key" => $_SESSION["key"]);
			$result = parent::callAPI("signout", $data);


			echo "TEST";
			exit();
			// remove all session variables
			session_unset(); 
			// destroy the session 
			session_destroy(); 
		} else {
			var_dump("ERREUR DE DÉCONNEXION");
		}
	}
}
