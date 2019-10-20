<?php
	require_once("action/LoginAction.php");

	$action = new LoginAction();
	$action->execute();

	require_once("partial/header.php");
?>


            <canvas id="canvas" width="1200" height="900"></canvas>
        </div>
	<?php
			if (isset($_GET["deconnexion"]))
			{
				$action->logout();
			}
			if ($action->estConnecte) {
				?>
				<div id="connecte">
				<div class="error-div"><strong>Vous êtes connecté : </strong>Connexion réussie</div>
				<form action="index.php" method="get">
				<button name="deconnexion" type="submit">Se déconnecter!</button>
				</div>
				</form>

			<?php
			}
			else {

			?>

	<div id="logScreen">
	<h1>Magix</h1>
	<form action="index.php" method="post">
			<?php
			if ($action->wrongLogin) {
				?>
				<div class="error-div"><strong>Erreur : </strong>Connexion erronée</div>
			<?php
			}
			?>


		<div class="logElement">Nom d'usager</div>
		<input type="text" name="username" placeholder="Username">
		<div class="logElement">Mot de passe</div>
		<input type="password" name="password" placeholder="Password">
		<div></div>
		<button type="submit">Se connecter!</button>
	</form>
	</div>
	<?php
		}
	?>
</body>
</html>