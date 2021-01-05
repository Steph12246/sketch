let rWidth = document.querySelector("#rowWidth");
let rHeight = document.querySelector("#rowHeight");
let tbl = document.getElementById('drawTable');
let coloredTiles = document.getElementsByClassName('rows');
const gridSquares = document.getElementsByClassName("gridcells");
const colorButtons = document.querySelectorAll('.color-change');
const container = document.querySelector('#drawTable');
var color = 'black';

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
    // Once I can access the pixel in the changePixelColor() call that function instead of function(event)
       gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', function(event){
         console.log('this works');
           this.style.backgroundColor = color;
        }));
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

//need to pass the pixel so the style can be applied
function changePixelColor(){
switch (color) {
  case 'rainbow':
    this.style.backgroundColor = `hsl(${Math.random()* 360}, 100% , 50%)`;
    break;
  case 'grey':
    this.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
    break;
  case 'eraser':
    this.style.backgroundColor = '#000000'
    break;
  case 'black':
    this.style.backgroundColor= '#FFFFFF';
  default:
    this.stye.backgroundColor = 'blue';
    break;
  }
}

// this selects the value of color
function changeColor(e){
  console.log(e.target.dataset.color);
  switch (e.target.dataset.color){
    case 'rainbow':
      color = `hsl(${Math.random()* 360}, 100% , 50%)`;
      break;
    case 'grey':
      color = 'grey';
      break;
    case 'eraser':
      color = 'white';
      break;
    default:
      color = 'black'
      break;
  }
}

colorButtons.forEach(colorButtons => colorButtons.addEventListener('click', changeColor))


// doesn't apply style yet but for grid visibility 
var slider = document.getElementById('gridVisibility');
slider.addEventListener('input', function(){
  console.log(slider.value);
  let gridPixles = document.querySelectorAll('td.gridcells');
  gridPixles.forEach(coloredTiles => coloredTiles.style.border = 'silder.value solid black');
})


 //const color = document.querySelectorAll('color-change')
  //      color.forEach(colour => color.addEventListener('click', () => {
    //      alert(color.dataset)}));



//var slider = document.getElementById('gridVisibility');

//slider.addEventListener('input', function(){
//  console.log(slider.value/10);
//  document.getElementsByClassName('gridcells').style.border = (slider.value/10) solid black;
//});


//function listeners (){
  //var gridPixels = container.querySelectorAll('td');
    //  gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', function(event){
      //  console.log('this works');
        //this.style.backgroundColor = 'blue';
    //  }));
//};
//when x button is pressed run function changePixelColor(with xColor)
