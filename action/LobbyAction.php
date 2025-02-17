<?php
require_once("action/CommonAction.php");


class LobbyAction extends CommonAction
{
	public $wrongLogin = false;
	public $estConnecte = false;
	public $key;
	public function __construct()
	{
		parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
	}

	protected function executeAction() {
		if ($_SESSION["visibility"] < parent::$VISIBILITY_MEMBER)
		{
				header("Location: index.php");
				exit();
		}
		
	}

	public function logout()
	{
		if (isset($_SESSION["key"])) {
			$data = array("key" => $_SESSION["key"]);
			$result = parent::callAPI("signout", $data);
			// remove all session variables
			session_unset(); 
			// destroy the session 
			session_destroy(); 
		} else {
			var_dump("ERREUR DE DÉCONNEXION");
		}
	}
}
