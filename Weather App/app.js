let loc =document.getElementById('location');
let temp_value=document.getElementById("temp");
let climate=document.getElementById("temperature"); 

window.addEventListener("load", function() {
let long;
let lat;
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position)=>{
        long=position.coords.longitude;
        lat=position.coords.latitude;
        const proxy ="https://cors-anywhere.herokuapp.com/"
        const api= `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8a9bf80e52c13168972f59789156b8f2
        `;
        fetch(api)
            .then((Response)=>{
                return Response.json();
            })
            .then(data => {
                const {name}=data;
                const {feels_like}=data.main;
                const {id, main}=data.weather[0];
                loc.textContent=name;
                climate.textContent= main;
                temp_value.textContent=Math.round(feels_like-273);
                console.log(data);
            })
    })
}})