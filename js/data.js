window.onload = function() {

let dataArr = [];
let   select_val ;
    
  /* fetch("https://restcountries.com/v3.1/all")
  .then(response => {
      if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
  })

  .then(data => {
      
      init(data);
  })
  .catch(error => {
      console.log(error)
  });







function init(){
    console.log("done");
    dataArr = data;
    console.log("from init", dataArr)
}
 */



// api url
//const api_url =  "https://restcountries.com/v3.1/all";

let flagsArr = [];
  
// Defining async function
async function getapi(url) {
   
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    flagsArr = data;
    init(flagsArr)
    if (response) {
        console.log(response)
    }
  //  init(flagsArr );
    renderElms(data)
 
}


getapi("https://restcountries.com/v3.1/all");









function createElm(img, name, population, region, capital,id){
    let content = `     <div class="">
                            <div class="inner-items">
                            <figure>
                            <img src='`+ img +`' alt="">
                            <div class="list-content">
                            <h3 class="c-name">`+ name +`</h3>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item"><span class="list-tag">Population: </span>`+ population +`</li>
                            <li class="list-group-item"><span class="list-tag">Region: </span>`+ region +`</li>
                            <li class="list-group-item"><span class="list-tag">Capital: </span>`+ capital +`</li>
                           
                            </ul>
                            </div>
                        </figure>
                            </div>
                           
                        </div>`;






let div = document.createElement('div');
div.className ="grid-item " + region;
div.id =id;

        div.innerHTML = content;
        
        document.querySelector('.flag-container').appendChild(div);

  }



  
  let   newArr=[];

  function init(data){
    




      document.getElementById('select-flags').onchange = function() {
        select_val = this.value;
        
       /*  if(select_val == "all"){
            getapi("https://restcountries.com/v3.1/all");
        }else{
            getapi(`https://restcountries.com/v3.1/region/`+select_val)
        }
        
 */


        if(select_val == "all"){
            renderElms(data)
        }else{
            flagsArr = data.filter(function (el) {
                return el.region == select_val
              }); 
    
             console.log(flagsArr)
             renderElms(flagsArr)
        
          }
        }



        document.getElementById("sbox").addEventListener('keyup',(e)=>{
            const term = e.target.value.toLowerCase();
        
            console.log(term)
            newArr=flagsArr;
            if(term == ""){
                renderElms(data)
            }else{
             
                newArr = flagsArr.filter(function (el) {
                    return el.name.common.toLowerCase().includes(term)
                    //return el.name.common == term
                  }); 
        
                 console.log(newArr)
                 renderElms(newArr)
            }
            
              
            
              
          
        
        })
        

       
        

  }



  function renderElms(data){
    document.querySelector('.flag-container').innerHTML = '';
    for(let i=0; i<data.length; i++){
        createElm(data[i].flags.png, data[i].name.common,data[i].population, data[i].region, data[i].capital,data[i].area);
      // console.log( flagsArr[i].flags.png)
    
      }








      Array.from(document.getElementsByClassName("grid-item")).forEach(element => {
        element.addEventListener('click', function(){
            console.log(element.id);
            localStorage.setItem("country", element.id);
            window.location.href = "https://shroouk.github.io/search-country-api/country.html";
           //   window.location.href = "../country.html";
        })
    });
  }










  //search filter


 

}



