var popupOpenButton = document.querySelector(".site-footer-map-button");
var popupCloseButton = document.querySelector(".button-close");
var popupForm = document.querySelector(".form-write-us");

popupOpenButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupForm.classList.add("form-write-us-show");
});

popupCloseButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupForm.classList.remove("form-write-us-show");
});