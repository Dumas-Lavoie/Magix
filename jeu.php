<!-- Page de jeu -->
<?php
	require_once("action/JeuAction.php");

	$action = new JeuAction();
	$action->execute();

	require_once("partial/header.php");
?>


	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="js/animationJeu.js"></script>


<?php
			if (isset($_GET["deconnexion"]))
			{
				$action->logout();
			}
			if (isset($_SESSION["key"])) {
				?>
				<script></script>
				<canvas id="canvas" width="1200" height="900"></canvas>
				<div id="connecte">
				<div class="error-div"><strong>Vous êtes connecté
				<form action="index.php" method="get">
				<button name="deconnexion" type="submit">Se déconnecter!</button>
				</div>
				</form>

			<?php
			}
			?>

</body>
</html>