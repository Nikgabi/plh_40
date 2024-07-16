var modeButtons = document.querySelectorAll(".mode");
var text1= document.querySelector("#textme1");
var text2= document.querySelector("#textme2");

setupModeButtons();



function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "LINKS") {
				text1.classList.add("hidden");
				text2.classList.remove("hidden");
			}
			else {
				text2.classList.add("hidden");
				text1.classList.remove("hidden");
			}
			
		});
	}
}