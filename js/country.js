

	function Ck() {
		var checkBox = document.getElementById("dm");
	
		if (checkBox.checked == true) {
			document.body.style.backgroundColor = "#202d36";
			document.body.style.color = "#fff";
	
			document.getElementById("nav").classList.add("nav-dark");
			document.getElementById("nav").classList.remove("nav-light");

			
			document.getElementById("back-btn").classList.add("btn-dark");
			document.getElementById("back-btn").classList.remove("btn-light");


			
	
		} else {
			document.body.style.backgroundColor = "#fff";
			document.body.style.color = "#1b1c1e";
	
			document.getElementById("nav").classList.remove("nav-dark");
			document.getElementById("nav").classList.add("nav-light");

			document.getElementById("back-btn").classList.add("btn-light");
			document.getElementById("back-btn").classList.remove("btn-dark");


			
		}
	
		/* if (checkBox.checked == true) {
			document.getElementById("mode-img").src = './imgs/moon-dark.svg';
		} else {
			document.getElementById("mode-img").src = './imgs/moon-light.svg';
		} */
	
	}


















var country = localStorage.getItem("country");
console.log(country)

var countryArr = [];

async function getapi(url) {
   
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
   
   // init(flagsArr)
    if (response) {
        console.log(response)
    }
    countryArr = data;
    countryArr = data.filter(function (el) {
        return el.area == country
      }); 
    getCountry(countryArr)
 
}


getapi("https://restcountries.com/v3.1/all");






function createbadge(name){
    let content = `    <span class="badge bg-light text-dark">`+name+`</span> `;


    let span = document.createElement('span');
    span.innerHTML = content;
        
        document.querySelector('#borders').appendChild(span);

  }




function getCountry(countryArr){

    let native = "";
    Object.entries(countryArr[0].name.nativeName).forEach(([key, value]) => {
        native = key.toString();
        console.log(native)
      });

      let currency = Object.keys(countryArr[0].currencies)[0];
      let langs = Object.values(countryArr[0].languages)

    document.getElementById('img').src= countryArr[0].flags.png ;
    document.getElementById('name').innerHTML = countryArr[0].name.common ;
    document.getElementById('nativeName').innerHTML = countryArr[0].name.nativeName[native].common;
    document.getElementById('population').innerHTML = countryArr[0].population;
    document.getElementById('region').innerHTML = countryArr[0].region;
    document.getElementById('subregion').innerHTML = countryArr[0].subregion;
    document.getElementById('capital').innerHTML = countryArr[0].capital;
    document.getElementById('tld').innerHTML = countryArr[0].tld;
    document.getElementById('currencies').innerHTML = countryArr[0].currencies[currency].name;
    document.getElementById('languages').innerHTML = langs;
    

    for(let i=0; i<countryArr[0].borders.length; i++){
        createbadge(countryArr[0].borders[i]);
    console.log(countryArr[0].borders)
      }
    
    
}