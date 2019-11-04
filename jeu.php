<!-- Page de jeu -->
<?php
require_once("action/JeuAction.php");

$action = new JeuAction();
$action->execute();

require_once("partial/header.php");
?>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/animationJeu.js"></script>
<script src="js/jeu/vue.js"></script>


<?php
if (isset($_GET["deconnexion"])) {
	$action->logout();
}
if (isset($_SESSION["key"])) {
	?>
	<!-- <script></script> -->
	<canvas id="canvas" width="1200" height="900"></canvas>

	<!-- BOARD -->
	<div id="ecranJeu">
		<div id="opponentBoard">
			<div>10</div>
			<div>Dummy AI</div>
			<div>0</div>
		</div>
		<div id="connecte">
		<div class="error-div"><strong>Vous êtes connecté : </strong>Connexion réussie</div>
		<form action="index.php" method="get">
		<button id="boutonConnecte" name="deconnexion" type="submit">Se déconnecter!</button>
		</form>
		</div>


		</div>
		<div id="gameBoard">
			<div id="opponentCards">
				<div>Carte1</div>
				<div>Carte1</div>
			</div>
			<div id="playerCards">playerCards</div>
		</div>
		<div id="playerBoard">Player board</div>

	</div>
</form>

<?php
}
?>

</body>

</html>