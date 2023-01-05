
const imgBox = document.querySelector("#container > img");

imgBox.addEventListener("mouseover", function() {
  imgBox.src = "images/6-6.jpg";
});
imgBox.addEventListener("mouseout", function() {
  imgBox.src="images/6-1.jpg";
});