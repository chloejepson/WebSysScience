function todaysWeather(){
    var key="6419536d88f0f5ef012fe3da0bbcceff";
    var link="https://api.openweathermap.org/data/2.5/weather?";
    var location= document.getElementById("location");
    //current loc
    navigator.geolocation.getCurrentPosition(success, error);

    function error(){
        //use richmond va weather if the location isnt approved by client
        latitude= 37.54;
        longitude= 77.44;
        //parse json in the same way as below
        var newLat= String(latitude);
        var newLong= String(longitude);
        $.getJSON(link + "lat=" + String(latitude) + "&lon=" + String(longitude) + "&appid=" + key, function(data){

            var currCity= data.name;
            var currTemp= data.main.temp;
            var currIconCode = data.weather[0].icon;
            var currWind= data.wind.speed;
            var currHumidity= data.main.humidity;
            var currSky= data.weather.main;
            var currFeelsLike= data.main.feels_like;
            document.getElementById("icon").innerHTML= "Current Skies: " +"<img src='http://openweathermap.org/img/w/" + currIconCode + ".png' height='100px'>";
            document.getElementById("place").innerHTML= "<img src='globe.jpg' height='30px'>" + currCity;
            document.getElementById("temp").innerHTML = "<img src='ther.jpg' height='30px'>" + currTemp + "° F";
            document.getElementById("wind").innerHTML= "<img src='wind.jpg' height='30px'>" + currWind + " mph";
            document.getElementById("humidity").innerHTML=currHumidity + " % humidity";
            document.getElementById("feelsLike").innerHTML= "<img src='ther.jpg' height='30px'>" + "Right now it feels like " + currFeelsLike + "° F";
        });
    }

    function success(position){
        var crd= position.coords;
        //latitude= crd.latitude
        //longitude= crd.longitude
        latitude= crd.latitude;
        longitude= crd.longitude;
        var newLat= String(latitude);
        var newLong= String(longitude);
        //parsing
        //below to see where error is in the api call
        // var test= link + "lat=" + String(latitude) + "&lon=" + String(longitude) + "&appid=" + key;
        // $('#test').html(test);
        $.getJSON(link + "lat=" + String(latitude) + "&lon=" + String(longitude) + "&appid=" + key, function(data){

            var currCity= data.name;
            var currTemp= data.main.temp;
            var currIconCode = data.weather[0].icon;
            var currWind= data.wind.speed;
            var currHumidity= data.main.humidity;
            var currSky= data.weather.main;
            var currFeelsLike= data.main.feels_like;
            document.getElementById("icon").innerHTML= "<img src='http://openweathermap.org/img/w/" + currIconCode + ".png' height='100px'>";
            document.getElementById("place").innerHTML= "<img src='globe.jpg' height='30px'>" + currCity;
            document.getElementById("temp").innerHTML = "<img src='ther.jpg' height='30px'>" + currTemp + "° Kelvin";
            document.getElementById("wind").innerHTML= "<img src='wind.jpg' height='30px'>" + currWind + " mph";
            document.getElementById("humidity").innerHTML= "<img src='humid.jpg' height='30px'>" + currHumidity + " % humidity";
            document.getElementById("feelsLike").innerHTML= "<img src='ther.jpg' height='30px'>" + "Right now it feels like " + currFeelsLike + "° Kelvin";
        });
    }
    
}

todaysWeather();