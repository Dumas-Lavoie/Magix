<?php
	require_once("action/LobbyAction.php");

	$action = new LobbyAction();
	$action->execute();

	require_once("partial/header.php");
?>


	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="js/animationLobby.js"></script>


<?php
			if (isset($_GET["deconnexion"]))
			{
				$action->logout();
			}
			if (isset($_SESSION["key"])) {
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