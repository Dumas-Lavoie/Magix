window.addEventListener("load", () => {
	setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});


function state() {
    $.ajax({
        url : "ajax-state.php",
        type : "POST"
    })
    .done(function (msg) {
	var reponse = JSON.parse(msg);

	let playerHand = reponse.hand;

	ajouterCarte(playerHand, "#handsCards");




	console.log(reponse);

    // traitement ici…

    setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
	})
}


function ajouterCarte(tableau, conteneur)
{
	let template = document.querySelector("#card-Template").innerHTML;

	for (i = 0; i<tableau.length; i++)
	{
		let newCard = Document.createElement("div");
		newCard.innerHTML = template;
		newCard.querySelector("h2").innerHTML = "Nom de la carte";


		document.querySelector(conteneur).appendChild(newCard);
	}

}


function clearGame ()
{
	// Pour tous les conteneurs
	document.getElementById("handsCards").innerHTML = "";
	document.getElementById("oponentCards").innerHTML = "";
	document.getElementById("boardCard").innerHTML = "";
}

function action(action, uId=null, uIdAttackedCard=null) {
	$.ajax({
        url : "ajax-action.php",
		type : "POST",
		data : {
			type : action,
			UID : uId,
			UIDAC : uIdAttackedCard
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