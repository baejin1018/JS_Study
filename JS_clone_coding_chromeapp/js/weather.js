const API_KEY = "db0e614e27e2c952ddfb748ff9f15469"

function onGeoOk(position ){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in",lat,lng);
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);//브라우저에서 내 좌표를 불러온다