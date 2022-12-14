//import elements
const color = document.getElementById('colorPicker');

//select size
const sizePicker = document.getElementById('sizePicker');


const pixelCanvas = document.getElementById('pixelCanvas');

//make grid when clicking submit
sizePicker.addEventListener("submit", makeGrid);

function makeGrid(grid) {

    pixelCanvas.innerHTML ='';

    grid.preventDefault();

// create rows and colums
    let column = this.elements.height.value;
    let row = this.elements.width.value;
      for (let x = 0; x < row; x++) {
        let tableRow = document.createElement('tr');
        for (let y = 0; y < column; y++) {
            let tableColumn = document.createElement('td');
            tableColumn.addEventListener('click', changeColor);
            tableRow.appendChild(tableColumn);

            pixelCanvas.appendChild(tableRow);
        }
      }
    }

//color Select

function changeColor() {

    this.style.backgroundColor = color.value;
   }

