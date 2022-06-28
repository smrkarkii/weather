window.addEventListener("load", () => {
   
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position  => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log(lat, lon)
            console.log(position)
        })
    }

    else{
        console.log("location not approved")
    }

    document.getElementById("location").innerHTML = lon;
})

