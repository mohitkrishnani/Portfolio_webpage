var profile = document.getElementById("prof-card");
			console.log(profile);
 			var intro = document.getElementById("popupintro");
			
			profile.addEventListener("mouseover",() => {
				intro.style.width = "100%";
				intro.style.top = "40%";
				intro.style.left = "70%";
				intro.childNodes[1].innerHTML = "Hi, I am Mohit Krishnani,I am 21 years old currently working at Quantiphi as a Framework Engineer Intern in the software development domain.This website will tell you more about my work experience, the projects that I have undertaken during my college days and what skills that I bring to the table.";
				intro.childNodes[1].style.padding = "17px;"
				intro.style.display = "block";
			});
			profile.addEventListener("mouseout",() => {
				intro.style.display = "none";
			});