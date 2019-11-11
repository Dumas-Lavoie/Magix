window.addEventListener("load", () => {
	setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});



let cardNames = ['canaries', 'sprites', 'Garde inférieure',
	'Boh', 'Charge mineure', 'Aniyaku', 'Chichiyaku', 'Ashitaka_shot', 'boh transformé',
	'Casse', 'Catbus', 'Chihiro', 'Essaim', 'Faux Boh',
	'Forest spirit', 'Apparition', 'Garnouille', 'MagieBleue', 'NoTrain',
	'DragonRide', 'Banquet', 'Haku', 'Haku Dragon', 'Wizard',
	'Magicienne', 'Lill Totoro', 'Jiji Kiki', 'Kamaji', 'Kiki',
	'ForestSpirit', "Preparation", 'Robot', 'LeJugement', 'Lin', 'Monstre élémentaire',
	'Nausicaa', 'No Face', 'noMoarPigs', 'pigs', 'Porco Rosso', 'Protection rock', 'Run',
	'Spectral', 'Deamon', 'Teto', 'Harry Potter', 'Ville Des Spectres', 'Yakul', 'Yakul ride',
	'Yubaba', 'Zeniba'
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
	'50Yubaba.png', '51Zeniba.png'
]

let selectedCard = null;

function state() {
	$.ajax({
		url: "ajax-state.php",
		type: "POST"
	})
		.done(function (msg) {
			var reponse = JSON.parse(msg);

			let playerHand = reponse.hand;
			let playerBoard = reponse.board;
			let opponentBoard = reponse.opponent.board;

			console.log(reponse);


			clearGame();
			updateValues(reponse);
			ajouterCarte(playerHand, "#handsCards", reponse);
			ajouterCarte(opponentBoard, "#opponentCards", null);
			ajouterCarte(playerBoard, "#playerCards", null);


			// traitement ici…

			setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
		})
}


function ajouterCarte(tableau, conteneur, infos) {

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
				}
			}
			catch {
			}


			// Effet sur le bouton du pouvoir du héro (si il peut être activé)
			// document.querySelector("#heroPower").style. = "";

			newCard.querySelector(".name").innerHTML = cardNames[tableau[i].id];
			newCard.querySelector(".img").style.backgroundImage = "url(\"images/cards/" + imgCardsNames[tableau[i].id] + "\")";
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
			console.log("Action:");
			console.log(msg);
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