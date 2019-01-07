const COORDS = 'coords';

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    console.log(position.coords.latitude);
}

function handleGeoError() {
    console.log('Cant access geo location');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null) {
        askForCoords();
    } else {
        //get weather
    }
}

function init() {
    loadCoords();
}
init();