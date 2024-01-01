const locationInput = document.getElementById("location-input");
const dateInput = document.getElementById("date-input");
const amountInput = document.getElementById("amount-input");
const table = document.querySelectorAll("table");

function add() {
    if(locationInput.value, dateInput.value, amountInput.value === ''){
        alert("Add an item!");
    }
    else{
        addRow();
        clearData();
        saveData();
    }
}


function addRow()
{
    let locationInput = document.getElementById("location-input").value;
    let dateInput = document.getElementById("date-input").value;
    let amountInput = document.getElementById("amount-input").value;
    let table = document.querySelectorAll("table")[0];
    let newRow = table.insertRow(table.rows.length/2+1);
    let cel1 = newRow.insertCell(0);
    let cel2 = newRow.insertCell(1);
    let cel3 = newRow.insertCell(2);
    cel1.innerHTML = locationInput;
    cel2.innerHTML = dateInput;
    cel3.innerHTML = amountInput;
}

function clearData(){
    locationInput.value = "";
    dateInput.value = "";
    amountInput.value = "";
}
