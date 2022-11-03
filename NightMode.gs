
/*
function makeToggleNightMode() {
  var body = DocumentApp.getActiveDocument().getBody();
  
  let txt = body.editAsText();
  let tColor = txt.getForegroundColor(); 
  let bColor = txt.getBackgroundColor(); // why are these null?
  
      
  return ()=>body.editAsText().setForegroundColor(invertHexadecimal(tColor)).setBackgroundColor(invertHexadecimal(bColor));
}


function invertHexadecimal(hexstring) {
  let arr = hexToRgb(hexstring);
  arr.map(x=>255-x);
  return rgbToHex(arr);
}

function rgbToHex(arr) {
  return '#'+arr[0].toString(16)+arr[1].toString(16)+arr[2].toString(16);
}

function hexToRgb(hx) {
  return [hx.slice(1,2),hx.slice(3,4),hx.slice(4,5)].map(x=> parseInt(x,16));
}
*/




function setNight(){
  DocumentApp.getActiveDocument().getBody().editAsText().setForegroundColor("#FFFFFF").setBackgroundColor("#000000");
}

function setDay(){
  DocumentApp.getActiveDocument().getBody().editAsText().setForegroundColor("#000000").setBackgroundColor("#FFFFFF");
}


/// UI stuff


// Add a custom menu to the active document, including a separator and a sub-menu.
function onOpen(e) {
  //let toggleNightMode = makeToggleNightMode();
  DocumentApp.getUi()
      .createMenu('Custom Scripts')
      
      .addItem('Night Mode',  'setNight')
      .addItem('Light Mode', 'setDay')
      
      //.addItem('Toggle Night Mode', 'toggleNightMode')
      /*
      .addSeparator()
      .addSubMenu(DocumentApp.getUi().createMenu('My sub-menu')
          .addItem('One sub-menu item', 'mySecondFunction')
          .addItem('Another sub-menu item', 'myThirdFunction'))
      */
      .addToUi();
}
