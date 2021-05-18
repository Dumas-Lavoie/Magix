window.addEventListener("load", () => {
	setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});



let cardNames = ['canaries', 'sprites', 'Garde inférieure',
	'Boh', 'Charge mineure', 'Aniyaku', 'Chichiyaku', 'Ashitaka shot', 'boh transformé',
	'Casse', 'Catbus', 'Chihiro', 'Essaim', 'Faux Boh',
	'Forest god', 'Apparition', 'Garnouille', 'Magie bleue', 'No train',
	'Dragon ride', 'Banquet', 'Haku', 'Haku dragon', 'Wizard',
	'Magicienne', 'Lill Totoro', 'Jiji Kiki', 'Kamaji', 'Kiki',
	'Forest spirit', "Preparation", 'Robot', 'LeJugement', 'Lin', 'Monstre élémentaire',
	'Nausicaa', 'No Face', 'noMoarPigs', 'pigs', 'Porco Rosso', 'Protection rock', 'Run',
	'Spectral', 'Deamon', 'Teto', 'Harry Potter', 'Ville Des Spectres', 'Yakul', 'Yakul ride',
	'Yubaba', 'Zeniba', 'Mickey Old', 'Cruella De Vil', 'Elsa', 'Cendrillon', 'Ariel', 'Goofy',
	'Lora Baines', 'Kevin Flynn', 'Bambi', 'Bambi 2', 'Bat Queen', 'Quorra', 'Ada', 'Akira Akatsuki',
	'Airiels', 'Aladin', 'Alex', 'Aldarn', 'Alice', 'Annette', 'Antauri', 'Anubis', 'Arianna', 'Arcade'
	, 'Aurore', 'Ayesha', 'Aziz', 'Alec', 'Baloo', 'Mowgli', 'Bashful', 'Bear', 'Pacha', 'Tarzan', 'Milo Thatch',
	'Lady', 'Lala The Koala', 'Queen Leah', 'Cloud', 'Macbeth', 'Little Helper', 'Ludo', 'Officer Malone'
]


let imgCardsNames = ['01canaries.gif', '02sprites.gif', '03Garde inférieure.gif',
	'04Boh.gif', '05Charge mineure.gif', '06Aniyaku.png', '07Chichiyaku.png', '08Ashitaka_shot.gif', '09bohTransforme.gif',
	'10casse.gif', '11catbus.jpg', '12Chihiro.jpg', '13essaim.gif', '14faux Boh.gif',
	'15Forest_Spirit.jpg', '16Apparition.gif', '17Garnouille.gif', '18MagieBleue.gif', '19NoTrain.gif',
	'20DragonRide.gif', '21Banquet.gif', '22Haku.jpg', '23hakuDragon.gif', '24Wizard.jpg',
	'25Magicienne.jpg', '26LillTotoro.jpg', '27jiji-kiki.png', '28Kamaji.gif', '29kiki.jpg',
	'30ForestSpirit.jpg', "31laPreparation.gif", '32Robot.jpg', '33LeJugement.gif', '34Lin.jpg', '35monstre elementaire.gif',
	'36nausicaa.jpg', '37No_Face_.png', '38noMoarPigs.gif', '39pigs.png', '40porco-rosso.jpg', '41Protection rock.gif', '42run.gif',
	'43Spectral.jpg', '44Deamon.jpg', '45teto.jpg', '46HarryPotter.jpg', '47VilleDesSpectres.jpg', '48Yakul.jpg', '49YakulRide.jpg',
	'50Yubaba.png', '51Zeniba.png', '52MickeyOld.gif' , '53Cruella_De_Vil.jpg', '54Elsa.jpg', '55Cendrillon.jpg', '56Ariel.jpg',
	'57Goofy.jpg', '58Lora_Baines.jpg', '59Kevin_Flynn.jpg', '60Bambi.jpg', '61Bambi2.jpg', '62BatQueen.jpg', '63Quorra.jpg'
	, '64Ada.png', '65Akira_akatsuki.jpg', '66Airiels.jpg', '67Aladdin.png', '68Alex.jpg', '69Aldarn.jpg', '70Alice.jpg',
	'71Annette.jpg', '72Antauri.jpg', '73Anubis.gif', '73Arianna.jpg', '74Arcade.png', '75Aurore.jpg',
	'76Ayesha.png', '77Aziz.jpg', '78Alec.png', '79Baloo.jpg', '80Mowgli.jpg', '81Bashful.png', '82Bear.jpg',
	'83Pacha.jpg', '84Tarzan.png', '85Milo_Thatch.png', '86Lady.jpg', '87Lala_The_Koala.jpg', '88Queen-Leah.png',
	'89Cloud.png', '90Macbeth.jpg', '91Little_Helper.png', '92Ludo.png', '93Officer_Malone.jpg'
]

let selectedCard = null;


const state = () => {
	fetch("ajax-state.php", {   // Il faut créer cette page et son contrôleur appelle 
 method : "POST",       // l’API (games/state)
credentials: "include"
})
.then(response => response.json())
.then(data => {

	console.log(data); // contient les cartes/état du jeu.

	

	if (data == 'WAITING') {
		console.log("ATTENTE...");
	}
	else if (data != 'LAST_GAME_WON' && data != 'LAST_GAME_LOST') {
		

		let playerHand = data.hand;
		let playerBoard = data.board;
		let opponentBoard = data.opponent.board;

		console.log(data);



		// traitement ici…
		clearGame();
		updateValues(data);
		ajouterCarte(playerHand, "#handsCards", data);
		ajouterCarte(opponentBoard, "#opponentCards");
		ajouterCarte(playerBoard, "#playerCards");
	}
	else if (data == 'LAST_GAME_WON') {
		document.querySelector("#gameOverWin").style.display = "block";
		setTimeout(redirectLobbyDelay, 10000);
	}
	else if (data == 'LAST_GAME_LOST') {
		document.querySelector("#gameOverLost").style.display = "block";
		setTimeout(redirectLobbyDelay, 10000);
	}
	else {
		console.log("ERROR");
	}
	


	setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
})}













/*function state() {
	$.ajax({
		url: "ajax-state.php",
		type: "POST"
	})
		.done(function (msg) {
			var reponse = JSON.parse(msg);

			console.log("LAST PARSE:" + msg);

			if (reponse != 'LAST_GAME_WON' && reponse != 'LAST_GAME_LOST' && reponse !='WAITING') {
				
				let playerHand = reponse.hand;
				let playerBoard = reponse.board;
				let opponentBoard = reponse.opponent.board;

				console.log(reponse);



				// traitement ici…
				clearGame();
				updateValues(reponse);
				ajouterCarte(playerHand, "#handsCards", reponse);
				ajouterCarte(opponentBoard, "#opponentCards");
				ajouterCarte(playerBoard, "#playerCards");


				setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
			}

			else {

				if (reponse != "WAITING") {

					if (reponse == 'LAST_GAME_WON') {
						document.querySelector("#gameOverWin").style.display = "block";
					}
					
					else if (reponse == 'LAST_GAME_LOST') {
						document.querySelector("#gameOverLost").style.display = "block";
					}
					// 10 secondes avant le retour au lobby
					setTimeout(redirectLobbyDelay, 10000);
			}
			else {
				setTimeout(state, 1000);
			}
			}
		})
}*/


function ajouterCarte(tableau, conteneur, infos =null) {

	if (document.querySelector("#card-template") != null) {

		let template = document.querySelector("#card-template").innerHTML;


		for (let i = 0; i < tableau.length; i++) {
			let newCard = document.createElement("div");

			if (conteneur == "#handsCards") {

				let tUid = tableau[i].uid;

				newCard.onclick = () => {
					action("PLAY", tUid);
				}
			}
			else if (conteneur == "#opponentCards") {
				let tUid = tableau[i].uid;
				newCard.onclick = () => {
					if (selectedCard) {
						action("ATTACK", selectedCard, tUid);
					}

				}
			}
			else if (conteneur == "#playerCards") {
				newCard.onclick = () => {
					selectedCard = tableau[i].uid;
				}
			}



			newCard.innerHTML = template;

			try {
				if (infos) {

					if (infos.mp >= tableau[i].cost) {
						newCard.querySelector(".character").style.animation = "cartesJouables 20s infinite";
					}

					// Effet sur le bouton du pouvoir du héro (si il peut être activé)
					if (infos.mp >= 2 && !infos.heroPowerAlreadyUsed) {
						document.querySelector("#heroPower").style.animation = "boutonPouvoirHero 2s infinite";
					}
					else {
						document.querySelector("#heroPower").style.animation = "none";
					}
					if (infos.yourTurn) {
						document.querySelector("#terminerTour").style.animation = "boutonFinTour 2s infinite";
					}
					else {
						document.querySelector("#terminerTour").style.animation = "none";
					}
				}
			}
			catch {
			}


			// Si la carte est taunt; elle a droit à une carte avec une bordure dorée
			if (tableau[i].mechanics.includes("Taunt")) {
				newCard.querySelector(".character").style.backgroundImage = "url(images/gameAssets/tauntCardAsset.png)";

			}
			else {

				newCard.querySelector(".name").style.color = "silver";
				newCard.querySelector(".character").style.backgroundImage = "url(images/gameAssets/lambdaCardAsset.png)";
			}
			if (i <=cardNames.length )
			{			
			newCard.querySelector(".name").innerHTML = cardNames[tableau[i].id];
			newCard.querySelector(".img").style.backgroundImage = "url(\"images/cards/" + imgCardsNames[tableau[i].id] + "\")";
			}
			else {
			newCard.querySelector(".name").innerHTML = "unknown";
			//newCard.querySelector(".img").style.backgroundImage = "";			
			}

			newCard.querySelector(".mecanics").innerHTML = tableau[i].mechanics;
			newCard.querySelector(".attack").innerHTML = tableau[i].atk;
			newCard.querySelector(".hp").innerHTML = tableau[i].hp;
			newCard.querySelector(".cost").innerHTML = tableau[i].cost;


			document.querySelector(conteneur).appendChild(newCard);
		}
	}

}


function clearGame() {
	// Pour tous les conteneurs
	document.getElementById("handsCards").innerHTML = "";
	document.getElementById("opponentCards").innerHTML = "";
	document.getElementById("playerCards").innerHTML = "";

}

function action(action, uId = null, uIdAttackedCard = null) {
	$.ajax({
		url: "ajax-action.php",
		type: "POST",
		data: {
			type: action,
			UID: uId,
			UIDAC: uIdAttackedCard
		}
	})
		.done(function (msg) {
			// N/A
		})
}

const terminer = () => {
	action("END_TURN");
}

const heroPower = () => {
	action("HERO_POWER");
}

const heroAttack = () => {
	action("ATTACK", selectedCard, 0);
}


const updateValues = (reponse) => {
	// Player
	document.querySelector("#tempsJoueur").innerHTML = reponse.remainingTurnTime;
	document.querySelector("#ManaJoueur").innerHTML = reponse.mp;
	document.querySelector("#VieJoueur").innerHTML = reponse.hp;
	// Opponent
	document.querySelector("#OpponentLife").innerHTML = reponse.opponent.hp;
	document.querySelector("#OpponentName").innerHTML = reponse.opponent.username;
	document.querySelector("#OpponentMana").innerHTML = reponse.opponent.mp;
	document.querySelector("#OpponentCards").innerHTML = reponse.opponent.username + " a " + reponse.opponent.handSize + " cartes en main";

	if (reponse.yourTurn) {
		document.querySelector("#playerBoard").style.border = "solid";
		document.querySelector("#opponentBoard").style.border = "none";
	}
	else {
		document.querySelector("#playerBoard").style.border = "none";
		document.querySelector("#opponentBoard").style.border = "solid";
	}
}


const redirectLobbyDelay = () => {
	window.location.replace("lobby.php");
}