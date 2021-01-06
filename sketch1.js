let rWidth = document.querySelector("#rowWidth");
let rHeight = document.querySelector("#rowHeight");
let tbl = document.getElementById('drawTable');
let coloredTiles = document.getElementsByClassName('rows');
const gridSquares = document.getElementsByClassName("gridcells");
const colorButtons = document.querySelectorAll('.color-change');
const container = document.querySelector('#drawTable');
var color = '#000000';

function make(){
  for(let i=0; i< rWidth.value; i++){
    let myRow = document.createElement("tr");
      myRow.id = "row" + i;
      myRow.classList.add("rows");
      tbl.appendChild(myRow);
    let rowW = document.getElementById("row"+ i);
    for(let j=0; j< rHeight.value;  j++){
    let myCell = document.createElement("td");
      myCell.classList.add("gridcells");
      rowW.appendChild(myCell);
    }}
    console.log(color)
    var gridPixels = container.querySelectorAll('td');
       gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover',
      //
      function(event ){
      console.log('this works');
      changePixelColor(event.target)
     })
   );
  };

function makeGrid(){
  clearGrid();
    if (rWidth.value == 0 || rHeight.value == 0){
      alert("please enter a value");
    }
    else if (rWidth.value > 100 || rHeight.value > 100){
    alert("too large");
  }
    else make();
}

function clearGrid(){
  while (tbl.firstChild) {
      tbl.removeChild(tbl.lastChild);
    }
}
function emptyGrid(){
  let gridPixles = document.querySelectorAll('td');
  gridPixles.forEach(coloredTiles => coloredTiles.style.backgroundColor = 'white');
}


function changePixelColor(target){
switch (color) {
  case 'rainbow':
    target.style.backgroundColor = `hsl(${Math.random()* 360}, 100% , 50%)`;
    break;
  case 'grey':
    let currentOpacity = Number(target.style.backgroundColor.slice(-4, -1));
    console.log(currentOpacity);
      if (currentOpacity <= 0.9){
        target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
      }
      else if (target.style.backgroundColor == 'rgb(0, 0, 0)')
        return;
      else {
        target.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
      }
    break;
  case 'eraser':
    target.style.backgroundColor = '#FFFFFF';
    break;
  case 'black':
    target.style.backgroundColor = '#000000';
    break;
  case 'pickC':
  var pickedColor = document.getElementById('colorPicker').value;
  console.log(pickedColor)
      target.style.backgroundColor = pickedColor;
    break;
  default:
    target.style.backgroundColor = 'blue';
    break;
  }
}

function colorPicked(){
  color = 'pickC';
}
// this selects the value of color
function changeColor(e){
  color = e.target.dataset.color;
}

colorButtons.forEach(colorButtons => colorButtons.addEventListener('click', changeColor))


// for grid visibility
var slider = document.getElementById('gridVisibility');
slider.addEventListener('change', function(event){
  let borderString;
  if(Number(event.target.value)===0){
    borderString = '0';
  } else {
    borderString=`1px solid rgba(0,0,0,${event.target.value/100}`
  }
  console.log(borderString);
  let gridPixles = document.querySelectorAll('td.gridcells');
  gridPixles.forEach(coloredTiles => coloredTiles.style.border = borderString);
})
