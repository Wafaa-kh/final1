const cardsSection = document.getElementById('carsCard')
const carsFilterdData = [];
async function booking(){
    const carsData = await fetch('https://raw.githubusercontent.com/Savage3D/car-makes-models-data/master/car-makes.json')
    const encrybtedData = await carsData.json();
    for(let i=0; i<=Object.keys(encrybtedData).length; i++){
        cardsSection.innerHTML+=cards(encrybtedData[i])
        //console.log(encrybtedData[i])
    }
    function cards(encrybtedData){
        return`
        <h1>Choose name of Vehicle </h1>
        <div class="search">
        <img src="../assets/image/car5.png" width="100px" hight="50px">
        <p>${encrybtedData['name']}</p>
        <p> decription about this care</p>
        <a href="/booking/${encrybtedData['name']}"><button>Details</button></a><br>
    
           `
    }
}
booking()
