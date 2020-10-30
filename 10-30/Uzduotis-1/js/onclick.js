var input = document.getElementById("btnw")
 input.onclick = function() {
    var chr = new XMLHttpRequest();
    chr.onreadystatechange = function (){
        if(chr.readyState === 4){
            var places = JSON.parse(chr.responseText);
            console.log(places)
            var icon = document.getElementById("icon");
            switch (places.forecastTimestamps[0].conditionCode){
                case 'clear':
                    icon.className='fas fa-sun';
                break;
                case 'isolated-clouds':
                    icon.className='fab fa-cloudversify';
                break;
                case 'scattered-clouds':
                    icon.className='fas fa-cloud-meatball';
                break;
                case 'overcast':
                    icon.className='fas fa-cloud';
                break;
                case 'light-rain':
                    icon.className='fas fa-faucet';
                break;
                case 'moderate-rain':
                    icon.className='fas fa-cloud-rain';
                break;
                case 'heavy-rain':
                    icon.className='fas fa-cloud-showers-heavy';
                break;
                case 'sleet':
                    icon.className='fas fa-cloud';
                break;
                case 'light-snow':
                    icon.className='fas fa-snowflake';
                break;
                case 'moderate-snow':
                    icon.className='fas fa-snowman';
                break;
                case 'heavy-snow':
                    icon.className='fas fa-snowplow';
                break;
                case 'fog':
                    icon.className='fas fa-smog';
                break;
                case 'na':
                    icon.className='fas fa-exclamation-triangle';
                break;
                default:
                    icon.className='fas fa-minus-circle';
                break;
            }
        } if(chr.status === 404){
            document.getElementById("icon").className='fas fa-minus-circle';
        }
    };
    var link = 'https://api.meteo.lt/v1/places/' + document.getElementById("browser").value + '/forecasts/long-term';
    chr.open('GET', link);
    chr.send();
 };