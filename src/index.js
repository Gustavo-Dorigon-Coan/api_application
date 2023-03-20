navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});

navigator.bluetooth.getAvailability().then((available) => {
  if (available) {
    console.log("Bluetooth é suportado!!");
  } else {
    console.log("Perdão! Bluetooth não é suportado");
  }
});