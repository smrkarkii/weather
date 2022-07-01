window.addEventListener("load", () => {
   let long;
   let lat;

   if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {

        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        console.log(lat, lon)
        console.log(position)
        const API_KEY = `7f11cdd7f1de8797d5aa63f1c9da4679`
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={}&appid=${API_KEY}&units=metric`)
        .then( response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            showWeatherData(data);
        })
       
        // document.getElementById("timezone").innerHTML = data.timezone;
    })
    
   
   }
   else{
    console.log("ERROR")
   }

   function showWeatherData(data){
        let {humidity,temp, pressure, sunrise,sunset} = data.current;
        let {timezone, lat, lon} = data;
        console.log(lon);
        document.getElementById("timezone").innerHTML = timezone;
        document.getElementById("longitude").innerHTML = lon;
        document.getElementById("latitude").innerHTML = lat;
        document.getElementById("temp").innerHTML = temp;
   }

   
})


