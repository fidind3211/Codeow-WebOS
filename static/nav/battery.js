navigator.getBattery().then(function(battery) {
  checkBatteryLevel(battery);
});


navigator.getBattery().addEventListener('levelchange', function() {
  navigator.getBattery().then(function(battery) {
    checkBatteryLevel(battery);
  });
});


function checkBatteryLevel(battery) {
  if (battery.level < 0.05) {

    var audio = new Audio('audio.mp3');
    audio.volume = 1;

    audio.play();
   
    var img = document.createElement('img');
    img.src = 'https://media.discordapp.net/attachments/1090619225372119102/1092953703394316399/biZwaWQ9QXBp.png?width=452&height=281';
    img.style.position = 'fixed';
    img.style.top = 0;
    img.style.left = 0;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.zIndex = 9999;
    document.body.appendChild(img);
  }
}
