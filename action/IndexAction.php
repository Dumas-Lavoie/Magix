<?php
require_once("action/CommonAction.php");

class IndexAction extends CommonAction
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
		if (isset($_POST["username"]) && isset($_POST["password"])) {
			$data = [];
			$data["username"] = $_POST["username"];
			$data["password"] = $_POST["password"];

			$result = parent::callAPI("signin", $data);

			if ($result == "INVALID_USERNAME_PASSWORD") {
				// err
				$this->wrongLogin = true;
			} else {
				// Pour voir les informations retournées : var_dump($result);exit;
				$this->estConnecte = true;
				// var_dump($result);exit;
				$this->key = $result->key;
				$_SESSION["key"] = $result->key;
				$_SESSION["visibility"] = parent::$VISIBILITY_MEMBER;
				header("Location: lobby.php");
				exit();
			}
		}
	}

	public function logout()
	{
		if (isset($_SESSION["key"])) {
			$data = array("key" => $_SESSION["key"]);
			$result = parent::callAPI("signout", $data);
			$_SESSION["visibility"] = parent::$VISIBILITY_PUBLIC;
		} else {
			var_dump("ERREUR DE DÉCONNEXION");
		}
	}
}
