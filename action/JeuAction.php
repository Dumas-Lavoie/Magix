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

	protected function executeAction() {

	}

	public function logout()
	{
		if (isset($_SESSION["key"])) {
			$data = array("key" => $_SESSION["key"]);
			$result = parent::callAPI("signout", $data);
		} else {
			var_dump("ERREUR DE DÉCONNEXION");
		}
	}
}
