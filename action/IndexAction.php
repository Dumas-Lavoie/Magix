<?php
	require_once("action/CommonAction.php");
	require_once("DAO/ContentDAO.php");

	class IndexAction extends CommonAction {

		public $data;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$this->data = contentDAO::getContent();
		}
	}