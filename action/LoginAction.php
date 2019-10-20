<?php
	require_once("action/CommonAction.php");
	// require_once("action/DAO/UserDAO.php");

	class LoginAction extends CommonAction {
		public $wrongLogin = false;
		public $estConnecte = false;
		public $key;
		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {

			if (isset($_POST["username"]) && isset($_POST["password"])) {
				$data = [];
				$data["username"] = $_POST["username"];
				$data["password"] = $_POST["password"];

				$result = parent::callAPI("signin", $data);

				if ($result == "INVALID_USERNAME_PASSWORD") {
					// err
					$this->wrongLogin = true;
				}
				else {
					// Pour voir les informations retournées : var_dump($result);exit;
					$this->estConnecte = true;
					// var_dump($result);exit;
					$this->key = $result->key;
					$_SESSION["key"] = $result->key;
				}
			}
		}

		public function logout(){
			if (isset($_SESSION["key"]))
			{
				$data = array("key" => $_SESSION["key"]);
				$result = parent::callAPI("signout", $data);
			}
			else
			{
				var_dump("ERREUR DE DÉCONNEXION");
			}
		}

	}
