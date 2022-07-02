window.addEventListener("load", () => {

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
        let {humidity,temp, pressure} = data.current;
        let {timezone, lat, lon} = data;
        let {description} = data.current.weather[0];
        console.log(lon);
        $('#icon').attr("src","http://openweathermap.org/img/wn/"+data.current.weather[0].icon+"@2x.png");

        document.getElementById("timezone").innerHTML = timezone;
        document.getElementById("temp").innerHTML = temp;
        // document.getElementById("humidity").innerHTML = "Humidity: " +humidity;
        // document.getElementById("pressure").innerHTML = "Pressure: " +pressure;
        document.getElementById("weatherdesc").innerHTML = capitalize(description); 
       
     }

       
   

   
})

//to capitalize first letter
function capitalize(string){
    const strings = string.charAt(0).toUpperCase() + string.slice(1);
    return strings;

}

