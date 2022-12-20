

	function Ck() {
		var checkBox = document.getElementById("dm");
	
		if (checkBox.checked == true) {
			document.body.style.backgroundColor = "#202d36";
			document.body.style.color = "#fff";
	
			document.getElementById("nav").classList.add("nav-dark");
			document.getElementById("nav").classList.remove("nav-light");

			
			document.getElementById("back-btn").classList.add("btn-dark");
			document.getElementById("back-btn").classList.remove("btn-light");


			Array.from(document.getElementsByClassName("inpt-form")).forEach(element => {
				element.classList.remove("light-input");
				element.classList.add("dark-input");
			});

			Array.from(document.getElementsByClassName("badge")).forEach(element => {
				element.classList.remove("bg-light");
				element.classList.add("bg-dark");
			});
	
		} else {
			document.body.style.backgroundColor = "#fff";
			document.body.style.color = "#1b1c1e";
	
			document.getElementById("nav").classList.remove("nav-dark");
			document.getElementById("nav").classList.add("nav-light");

			document.getElementById("back-btn").classList.add("btn-light");
			document.getElementById("back-btn").classList.remove("btn-dark");


			Array.from(document.getElementsByClassName("inpt-form")).forEach(element => {
				element.classList.remove("dark-input");
				element.classList.add("light-input");


			});

			Array.from(document.getElementsByClassName("badge")).forEach(element => {
				element.classList.add("bg-light");
				element.classList.remove("bg-dark");
			});
			
		}
	
		/* if (checkBox.checked == true) {
			document.getElementById("mode-img").src = './imgs/moon-dark.svg';
		} else {
			document.getElementById("mode-img").src = './imgs/moon-light.svg';
		} */
	
	}







