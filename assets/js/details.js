const modelsSection = document.getElementById('modelsSection')
async function booking(){
    const carsData = await fetch('https://raw.githubusercontent.com/Savage3D/car-makes-models-data/master/car-makes.json')
    const encrybtedData = await carsData.json();
    const models = []
    const url = window.location.pathname;
    const editURL = url.replaceAll('/', ' ')
    const words = editURL.split(' ');
    for(let i=0; i<=Object.keys(encrybtedData).length; i++){
       if(words[2]==encrybtedData[i]['name']){
       encrybtedData[i]['models'].forEach(element => {
                modelsSection.innerHTML+=modelsCards(element)
            })
       }
    }
    function modelsCards(encrybtedData){
        return`
        <img src=#>
        <p>${encrybtedData['name']}</p>
        <p> description about this model</p>
        <a href="/booking/${encrybtedData['name'].replaceAll(' ', '-')}"><button>Details</button></a>
        `
    }
}
booking()