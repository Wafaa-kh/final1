const cardsSection = document.getElementById('carsCard')
const car = document.getElementById('car')
const models = document.getElementById('models')

const carsFilterdData = [];
const paramsArry =[];

async function booking(){
    const carsData = await fetch('https://raw.githubusercontent.com/Savage3D/car-makes-models-data/master/car-makes.json')
    const encrybtedData = await carsData.json();

    const params = await new URLSearchParams(window.location.search)
    for (const param of params) {
   paramsArry.push(param)
   
    }
/* 
21 - 22 -23 I created a car cards includes the car name and a select option for filtering the cars model 
the rest are chek if the option that was selected matches the url and if it does it will return
all of the models that has a connection with that selected car  */
  for(let i=0; i<=Object.keys(encrybtedData).length; i++){
        cardsSection.innerHTML+=cards(encrybtedData[i]);
        car.innerHTML +=carsOption(encrybtedData[i]['name']);
            if(paramsArry[0][1]!==0 &&paramsArry[0][1] ==encrybtedData[i]['name']){
                encrybtedData[i]['models'].forEach(model => {
                    models.innerHTML +=modelsCards(model)
                      cardsSection.style.display = 'none'
                });
        }
            
    }
    function cards(encrybtedData){
        return`
        <h1>Choose name of Vehicle </h1>
        <div class="search">
        <img src="../assets/image/car5.png" width="100px" hight="50px">
        <p>${encrybtedData['name']}</p>
        <p> decription about this care</p>
        <a href="/booking/${encrybtedData['name']}"><button>Details</button></a><br> `
    }
    function carsOption(encrybtedData){
        return`
        <option class = 'cars'  value= ${encrybtedData.replaceAll(' ', '-')}>${encrybtedData}</option>`
        
    }
   function modelsCards(model){
    return`<img src="../assets/image/car5.png" width="100px" hight="50px">
    <p>${model['name']}</p>
    <p> decription about this care</p>
    <a href="/booking/${model['name']}"><button>Details</button></a><br> `

 }
}
booking()
//<a href="/booking/${encrybtedData['name']}"><button>Details</button></a><br>