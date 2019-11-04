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

	// console.log(reponse);


	document.getElementById("handsCards").innerHTML = "";

	console.log(reponse);

	reponse.hand.forEach(element => {

	});

    // traitement ici…

    setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel



	})
}



const terminer = () => {
	console.log("TEST");
}