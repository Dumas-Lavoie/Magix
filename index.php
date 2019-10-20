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
			<?php
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