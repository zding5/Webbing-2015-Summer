
var oliviaJordan = document.getElementById("olivia-jordan");
var niaSanchez = document.getElementById("nia-sanchez");
var erinBrady = document.getElementById("erin-brady");

var hideall = document.getElementById("hideall");

oliviaJordan.addEventListener("click", picLink);
niaSanchez.addEventListener("click", picLink);
erinBrady.addEventListener("click", picLink);

hideall.addEventListener("click", hideLinks);

function picLink() {
	var imgList = document.querySelectorAll("img");

	for (var i=0; i<imgList.length; i++){
		imgList[i].style.display = "none";
	}

	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	if (pic.style.display === "none") {
		pic.style.display = "block";
	}
	else {
		pic.style.display = "none";
	}
}

function hideLinks() {
	var imgList = document.querySelectorAll("img");
	for (var i=0; i<imgList.length; i++){
		imgList[i].style.display = "none";
	}
}