window.addEventListener("load", () => {
	setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});




let cardNames = ['Canaries', 'Sprites', 'Garde inférieure', 
'Boh', 'Charge mineure', 'Aniyaku', 'Chichiyaku', 'Chihiro',  'Pigs', 'noMoarPigs',
'Frog n Gold', 'Sorcier de défense', 'Haku', 'NOFX (no face)', 'Le banquet', 
'Dragon', 'Dragon charge', 'Yubaba', 'Boh transformé', 'Préparation',
'No face is watching', 'Dragon charge', 'Lin', 'Kamaji', 'Monstre élémentaire',
'Run', "Le jugement.", 'Surveillance active', 'Protection rock', 'Apparition', 'Préparation',
'Essaim', 'Le repenti', 'TEST', 'TESTE', 'TEST', 'TESTE', 'TEST', 'TESTE', 'TEST', 'TESTE'
]

function state() {
	$.ajax({
		url: "ajax-state.php",
		type: "POST"
	})
		.done(function (msg) {
			var reponse = JSON.parse(msg);

			let playerHand = reponse.hand;

			console.log(reponse);


			clearGame();
			ajouterCarte(playerHand, "#handsCards");
			// traitement ici…

			setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
		})
}


function ajouterCarte(tableau, conteneur) {


	// console.log(document.querySelector("#card-template"));

	if (document.querySelector("#card-template") != null) {

		let template = document.querySelector("#card-template").innerHTML;


		for (i = 0; i < tableau.length; i++) {
			console.log("TEST");
			let newCard = document.createElement("div");
			newCard.onclick = () => {

			}
			newCard.innerHTML = template;

			newCard.querySelector(".name").innerHTML = cardNames[tableau[i].id];
			newCard.querySelector(".mecanics").innerHTML = tableau[i].mechanics;


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