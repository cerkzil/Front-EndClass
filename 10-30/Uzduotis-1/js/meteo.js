var phr = new XMLHttpRequest();
phr.onreadystatechange = function (){
    if(phr.readyState === 4){
        var places = JSON.parse(phr.responseText);
        console.log(places)
        for (let i = 0; i < places.length; i++){
            let option = document.createElement('option');
            option.setAttribute('label', places[i].name);
            option.setAttribute('value', places[i].code);
            document.querySelector('.dPlaces').append(option);
        }
    }
};
phr.open('GET', 'https://api.meteo.lt/v1/places');
phr.send();