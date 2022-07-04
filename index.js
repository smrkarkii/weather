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
        let {temp} = data.current;
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


     document.querySelector("#searchbutton").addEventListener("click" , searchlocation);
     
     
     function searchlocation() {
         let search = document.getElementById("search").value;
         console.log(search);
         console.log("search button clicked")
         const API_KEY = `7f11cdd7f1de8797d5aa63f1c9da4679`
         const api =  `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`
         fetch(api).then( response => {
             return response.json();
         })
         
         .then(data => {
             console.log(data);
             showWeatherDataByLocation(data);
         })
     }
     
     showWeatherDataByLocation(data) {
        let {temp} = data.main;
        let {name} = data.main;
        let {description} = data.weather[0];
        $('#icon').attr("src","http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png");

        document.getElementById("timezone").innerHTML = name;
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

