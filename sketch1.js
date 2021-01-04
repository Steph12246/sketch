let rWidth = document.querySelector("#rowWidth");
let rHeight = document.querySelector("#rowHeight");
let tbl = document.getElementById('drawTable');
let coloredTiles = document.getElementsByClassName('rows');
const gridSquares = document.getElementsByClassName("gridcells");


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
listeners();
}

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

const container = document.querySelector('#drawTable');

function listeners (){
  var gridPixels = container.querySelectorAll('td');
      gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', changePixelColor()));
};

//function listeners (){
  //var gridPixels = container.querySelectorAll('td');
    //  gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', function(event){
      //  console.log('this works');
        //this.style.backgroundColor = 'blue';
    //  }));
//};



function changePixelColor(){
switch (color) {
  case 'rainbow':
    this.style.backgroundColor = `hsl(${Math.random()* 360}, 100% , 50%)`;
    break;
  case 'grey':
    this.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
    break;
  case 'eraser':
    this.classList.add("clearC");
    break;
  case 'black':
    this.style.backgroundColor= '#000000';
  default:
    this.stye.backgroundColor = color;
    break;
  }
}

function changeColor(event){
  console.log('changed');
  switch (event.target.dataset.color){
    case 'rainbow':
      color = 'rainbow';
      break;
    case 'grey':
      color = 'grey';
      break;
    case 'eraser':
      color = 'eraser';
      break;
    default:
      color = 'black'
      break;
  }
}


function updateBorder(opac){
  var slider = document.getElementById('gridVisibility');
  document.getElementsByClassName('gridcells').style.border = "1px solid rgba(0,0,0,0.3)";
};

  //  slider.addEventListener('input', (e)  => {
  //  root.style.setProperty = ("-width", e.target.value);
  //  console.log(slider.value);
