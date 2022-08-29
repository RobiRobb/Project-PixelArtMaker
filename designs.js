const color = document.getElementById('colorPicker');

const sizePicker = document.getElementById('sizePicker');

const pixelCanvas = document.getElementById('pixelCanvas');


sizePicker.addEventListener("submit", makeGrid);



function makeGrid(grid)
{
    pixelCanvas.innerHTML ='';

    grid.preventDefault();

    let column = this.elements.height.value;
    let row = this.elements.width.value;
      for (let x = 0; x < row; x++) {
        tableRow = document.createElement('tr');
        for (let y = 0; y < column; y++) {
            tableColumn = document.createElement('td');
            tableColumn.addEventListener('click', changeColor);
            tableRow.appendChild(tableColumn);
        }

        pixelCanvas.appendChild(tableRow);


function changeColor() {

  this.style.backgroundColor = color.value;
}
}
}
