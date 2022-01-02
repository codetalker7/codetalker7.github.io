/*
	This script is used to toggle the light/dark modes.
	this script is also used to convert the image to its 
	negative in while switching from light_mode to 
	dark_mode. Make sure that the image in light mode 
	is named as "imageid-light.png" and in dark mode 
	it is named as "imageid-dark.png". The images to which
	this feature is to applied should have the class negate_image. Still 
	need to fix this for IE.
*/
var styling_file = document.getElementById("styling_css");
var image_set = document.getElementsByClassName("negate_image");

/*setting the current css based on users earlier choice*/
if (localStorage.getItem("mode") == "dark")
	darkMode();
/* var cookieArray = document.cookie.split(";");
for (var i = 0; i < cookieArray.length; i++){
	if (cookieArray[i].split("=")[0] == "mode" && cookieArray[i].split("=")[1] == "dark"){
		darkMode();
	}
} */

function lightMode(){
	/* document.cookie = "mode = light ;domain = siddc.tech ;secure"; */
	localStorage.setItem("mode" , "light");
	styling_file.setAttribute("href" , "../styling/site_style.v1.css");
	var len = image_set.length;
	for (var i = 0; i < len; i++){
		image_set[i].setAttribute("src" , "../images/" + image_set[i].id + "-light.png");
	}
}
function darkMode(){
	/* document.cookie = "mode = dark ;domain = siddc.tech ;secure"; */
	localStorage.setItem("mode" , "dark");
	styling_file.setAttribute("href" , "../styling/site_style_dark.v1.css");
	var len = image_set.length;
	for (var i = 0; i < len; i++){
		image_set[i].setAttribute("src" , "../images/" + image_set[i].id + "-dark.png");
	}
}