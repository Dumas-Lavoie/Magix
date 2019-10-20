<?php
	require_once("action/LoginAction.php");

	$action = new LoginAction();
	$action->execute();

	require_once("partial/header.php");
?>
	<h1>Login</h1>
	<form>
		<input type="text" placeholder="Username">
		<input type="password" placeholder="Password">
		<button type="submit">Se connecter!</button>
	</form>
</body>
</html>