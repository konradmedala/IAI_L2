let send = document.querySelector(".send");

send.addEventListener("click", checkForm);


function addClass(element, className) {
	element.classList.add(className);
}

function removeClass(element, className) {
	element.classList.remove(className);
}


function checkForm() {
	let iimie = document.querySelector("#imie");
	let inazwisko = document.querySelector("#nazwisko");
	let iwiek = document.querySelector("#wiek");

	let iimieV = iimie.value;
	let inazwiskoV = inazwisko.value;
	let iwiekV = iwiek.value;


	if (iimieV === '') {
		addClass(iimie, 'is-invalid');
		removeClass(iimie, 'is-valid');
		document.getElementById('dimie').innerHTML = "Proszę wypełnić Pole";
		document.getElementById('zimie').innerHTML = "";
	}
	else if (parseInt(iimieV)) {
		addClass(iimie, 'is-invalid');
		removeClass(iimie, 'is-valid');
		document.getElementById('dimie').innerHTML = "Proszę wypełnić Pole literami";
		document.getElementById('zimie').innerHTML = "";
	}
	else {
		removeClass(iimie, 'is-invalid');
		addClass(iimie, 'is-valid');
		document.getElementById('zimie').innerHTML = "OK";
		document.getElementById('dimie').innerHTML = "";
	}


	if (inazwiskoV === '') {
		addClass(inazwisko, 'is-invalid');
		removeClass(inazwisko, 'is-valid');
		document.getElementById('dnazwisko').innerHTML = "Proszę wypełnić Pole";
		document.getElementById('znazwisko').innerHTML = "";
	}

	else if (parseInt(inazwiskoV)) {
		addClass(inazwisko, 'is-invalid');
		removeClass(inazwisko, 'is-valid');
		document.getElementById('dnazwisko').innerHTML = "Proszę wypełnić Pole literami";
		document.getElementById('znazwisko').innerHTML = "";
	}
	else {
		removeClass(inazwisko, 'is-invalid');
		addClass(inazwisko, 'is-valid');
		document.getElementById('znazwisko').innerHTML = "OK";
		document.getElementById('dnazwisko').innerHTML = "";
	}


	if (iwiekV === '') {
		addClass(iwiek, 'is-invalid');
		removeClass(iwiek, 'is-valid');
		document.getElementById('dwiek').innerHTML = "Proszę wypełnić Pole";
		document.getElementById('zwiek').innerHTML = "";
	}
	else if (!parseInt(iwiekV) || isNaN(iwiekV) || iwiekV < 1 || iwiekV > 100) {
		addClass(iwiek, 'is-invalid');
		removeClass(iwiek, 'is-valid');
		document.getElementById('dwiek').innerHTML = "Proszę wypełnić Pole liczbami  (1-100)";
		document.getElementById('zwiek').innerHTML = "";
	}
	else {
		removeClass(wiek, 'is-invalid');
		addClass(iwiek, 'is-valid');
		document.getElementById('zwiek').innerHTML = "OK";
		document.getElementById('dwiek').innerHTML = "";
	}

}