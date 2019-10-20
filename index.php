<?php
	require_once("action/LoginAction.php");

	$action = new LoginAction();
	$action->execute();

	require_once("partial/header.php");
?>
	<h1>Login</h1>
	<?php
			if ($action->estConnecte) {
				?>
				<div class="error-div"><strong>Vous êtes connecté : </strong>Connexion réussie</div>
				<form action="index.php" method="get">
				<button name="deconnexion" type="submit">Se déconnecter!</button>
				</form>
			<?php
			}
			if (isset($_GET["deconnexion"]))
			{
				$action->logout();
			}
			?>
	<form action="index.php" method="post">
			<?php
			if ($action->wrongLogin) {
				?>
				<div class="error-div"><strong>Erreur : </strong>Connexion erronée</div>
			<?php
			}
			?>
		<input type="text" name="username" placeholder="Username">
		<input type="password" name="password" placeholder="Password">
		<button type="submit">Se connecter!</button>
	</form>
</body>
</html>