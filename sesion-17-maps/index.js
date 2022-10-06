let marker, map;

function initMap() {
    // console.log("Inicializando mapa")
    const posicion1 = {
        lat: 7.891,
        lng: 98.398
    }
    const posicion2 = {
        lat: 41.3818,
        lng: 2.1685
    }
    const posicion3 = {
        lat: -31.4135000,
        lng: -64.1810500
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion1
    })

    marker = new google.maps.Marker({
        position: posicion1,
        map,
        title: "Primer lugar preferido en el mundo"
    })
    marker = new google.maps.Marker({
        position: posicion2,
        map,
        title: "Segundo lugar preferido en el mundo"
    })
    marker = new google.maps.Marker({
        position: posicion3,
        map,
        title: "Tercer lugar preferido en el mundo"
    })
}

function geoPosiciona() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocalización")
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log("Se ha producido un error y lo hemos gestionado")
    console.error(error)
}