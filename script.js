// script.js

function addData() {
    // Get the table reference
    var table = document.getElementById("mangaTable");

    // Create a new row
    var newRow = table.insertRow(table.rows.length);

    // Sample data, you can replace this with user input or fetch from an API
    var data = ["New Data", "New Website", "New Update", "New Opened"];

    // Loop through the data and add cells to the new row
    for (var i = 0; i < data.length; i++) {
        var cell = newRow.insertCell(i);
        cell.innerHTML = data[i];
    }
}