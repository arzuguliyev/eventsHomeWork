"use strict";
let listItems = document.querySelectorAll('li');

function changeColor()
{
    let inputNumber = document.getElementById('example-number-input').value,
    inputColor = document.getElementById('example-color-input').value;
    console.log(inputNumber);
    if(inputNumber == 0)
    {
     alert('Minimum value must be at least 1');
    }
    else if(inputNumber<=listItems.length)
    {
       listItems[inputNumber-1].style.backgroundColor = inputColor;
       
    }
    else
    {
        alert('List has' + ' ' + listItems.length + ' ' +'elements');
    }

}


function changeSizetoBig(item)
{
    item.style.fontSize = "25px";
}

function changeSizetoNormal(item)
{
    item.style.fontSize = "16px";
}