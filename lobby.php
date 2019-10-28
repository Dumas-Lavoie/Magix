<?php
	require_once("action/LoginAction.php");

	// $action = new LoginAction();
	// $action->execute();

	require_once("partial/header.php");
?>

	<script src="js/animationLobby.js"></script>


<?php
			if (isset($_GET["deconnexion"]))
			{
				$action->logout();
			}
			if ($action->estConnecte) {
				?>
				<script></script>
				<div id="connecte">
				<div class="error-div"><strong>Vous êtes connecté : </strong>Connexion réussie</div>
				<form action="index.php" method="get">
				<button name="deconnexion" type="submit">Se déconnecter!</button>
				</div>
				</form>

			<?php
			}
			?>

</body>
</html>