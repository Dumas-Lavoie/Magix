window.addEventListener("load", () => {
	setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});



let cardNames = ['Canaries', 'Sprites', 'Garde inférieure',
	'Boh', 'Charge mineure', 'Aniyaku', 'Chichiyaku', 'Chihiro', 'Pigs', 'noMoarPigs',
	'Frog n Gold', 'Sorcier de défense', 'Haku', 'NOFX (no face)', 'Le banquet',
	'Dragon', 'Dragon charge', 'Yubaba', 'Boh transformé', 'Préparation',
	'No face is watching', 'Dragon charge', 'Lin', 'Kamaji', 'Monstre élémentaire',
	'Run', "Le jugement.", 'Surveillance active', 'Protection rock', 'Apparition', 'Préparation',
	'Essaim', 'Le repenti', 'TEST', 'TESTE', 'TEST', 'TESTE', 'TEST', 'TESTE', 'TEST', 'TESTE'
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
			ajouterCarte(playerHand, "#handsCards");
			ajouterCarte(opponentBoard, "#opponentCards");
			ajouterCarte(playerBoard, "#playerCards");


			// traitement ici…

			setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
		})
}


function ajouterCarte(tableau, conteneur) {


	// console.log(document.querySelector("#card-template"));

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
			else if (conteneur == "#opponentCards")
			{
				let tUid = tableau[i].uid;
				newCard.onclick = () => {
					if (selectedCard)
					{
						action("ATTACK", selectedCard, tUid);
					}

				}
			}
			else if (conteneur == "#playerCards")
			 {
				newCard.onclick = () => {
					selectedCard = tableau[i].uid;
				}
			 }

			newCard.innerHTML = template;

			newCard.querySelector(".name").innerHTML = cardNames[tableau[i].id];
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


const addCard = () => {

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
	// document.querySelector("#OpponentWelcomeTxt").innerHTML = reponse.opponent.welcomeText;
}