

var link = document.querySelector(".contact-button");
var popupForm = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var closeForm = document.querySelector(".modal-content-close");
var feedbackForm = popupForm.querySelector("form");
var login = popupForm.querySelector("[name=username]");
var email = popupForm.querySelector("[name=user-email]");
var storage = localStorage.getItem("login");

var way = document.querySelector(".map");
var popupMap = document.querySelector(".modal-content-map");
var closeMap = popupMap.querySelector(".close-btn");

link.addEventListener("click", function(event) {
	event.preventDefault(); 
	popupForm.classList.add("pop-up-show");
	popupForm.classList.add("feedback-form-anime");
	overlay.classList.add("pop-up-show");
	if(storage) {
		login.value = storage;
		email.focus();
	} else {
		login.focus();
	}
	
});

closeForm.addEventListener("click", function(event) {
	event.preventDefault();
	popupForm.classList.remove("pop-up-show");
	popupForm.classList.remove("feedback-form-anime");
	overlay.classList.remove("pop-up-show");
	login.classList.remove("modal-content-error");
	email.classList.remove("modal-content-error");
});


feedbackForm.addEventListener("submit", function(event) {
	if(!login.value){
		event.preventDefault(); 
		login.classList.add("modal-content-error");
	} else if(!email.value) {
		event.preventDefault(); 
		email.classList.add("modal-content-error");
	} else {
		localStorage.setItem("login", login.value);
	}
});


window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popupForm.classList.contains("pop-up-show")) {
			popupForm.classList.remove("pop-up-show");
			overlay.classList.remove("pop-up-show");
			login.classList.remove("modal-content-error");
			email.classList.remove("modal-content-error");
		} else if (popupMap.classList.contains("pop-up-show")) {
			popupMap.classList.remove("pop-up-show");
			overlay.classList.remove("pop-up-show");
		}
	}
});


way.addEventListener("click", function(event) {
	event.preventDefault(); 
	popupMap.classList.add("pop-up-show");
	overlay.classList.add("pop-up-show");
	closeMap.classList.add("close-btn-modal-map");
	
});

closeMap.addEventListener("click", function(event) {
	event.preventDefault();
	popupMap.classList.remove("pop-up-show");
	overlay.classList.remove("pop-up-show");
	closeMap.classList.remove("close-btn-modal-map");
});