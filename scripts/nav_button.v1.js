function myFunction() {
	ar = document.getElementsByClassName("nav_button_container");
	br = document.getElementsByTagName("nav");
	ar[0].classList.toggle("change");
	ar[1].classList.toggle("change");
	br[0].classList.toggle("nav_hidden");
} 