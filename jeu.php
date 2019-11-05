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
			<div id="OpponentLife">10</div>
			<div id="OpponentName"></div>

			<div id="OpponentMana">0</div>
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
		</div>
		<div id="playerCards">

		</div>
	</div>
	<div id="playerBoard">
		<div id="conteneurs">
			<!-- En display flex vertical -->
			<!-- Les trois conteneurs du joeur: temps, vie et mana -->
			<div id="VieJoueur">18</div>
			<div id="ManaJoueur">4</div>
			<div id="tempsJoueur">50</div>
		</div>
		<div id="handsCards">
		</div>
		<div id="playerButtons">
			<button onclick="terminer()">Terminer son tour</button>
			<button onclick="heroPower()">Pouvoir du héro</button>
		</div>

	</div>
	</div>
	</form>

<?php
}
?>

<template id="card-template">
	<div class='character'>
		<div class='uid'></div>
		<h2 class='name'></h2>
		<div class='img'></div>
		<div class='mecanics'></div>
		<div class='attack'></div>
		<div class='hp'></div>
	</div>
</template>
</body>

</html>