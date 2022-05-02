require('jquery')
require('bootstrap')
require('@fortawesome/fontawesome-free')

import myKey from '../../myKeyAPI'

// to work, comment the top line and add your key as the value of the line bottom(and uncomment, of course)
// let myKey = 'YOUR_KEY'

// Initialize and add the map
function initMap() {
  // The location of locationInitial
  const locationInitial = { lat: 43.65107, lng: -79.347015 }
  // The map, centered at locationInitial
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: locationInitial
  })
  // The marker, positioned at locationInitial
  const marker = new google.maps.Marker({
    position: locationInitial,
    map: map
  })
}

window.initMap = initMap

const linkMap = `<script
src="https://maps.googleapis.com/maps/api/js?key=${myKey}&callback=initMap"
async
defer
></script>`
$('body').append(linkMap)
