
let table = [];
let selectedIndex = -1;

function addInfo() {
    let infoName = document.getElementById("name").value;
    let infoSurname = document.getElementById("surname").value;
    let infoDate = document.getElementById("date").value;
    let infoSelect = document.getElementById("tur").value;

    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("date").value = "";
    document.getElementById("tur").value = "";

    let newTable = {
        name: infoName,
        surname: infoSurname,
        date: infoDate,
        select: infoSelect
    }

    if (selectedIndex >= 0){
        table[selectedIndex] = newTable;
        selectedIndex = -1;
    } else {
        table.push(newTable)
    }

    drawTable();
}

function drawTable() {
    let result = "";
    for (i = 1; i < table.length; i++){
        result +=
            "<tr>" +
            "<td>"+ i +"</td>" +
            "<td>"+ table[i].name + ' ' + table[i].surname +"</td>" +
            "<td>"+ table[i].date +"</td>" +
            "<td>"+ table[i].select +"</td>" +
            "<td><button type='button' class='btn btn-primary' onclick='editTable("+ i +")'>Edit</button></td>" +
            "<td><button type='button' class='btn btn-danger' onclick='deleteTable()'>Delete</button></td>" +
            "</tr>"
    }
    document.getElementById("result").innerHTML = result;
}

function deleteTable(index) {
    table.splice(index, 1);
    drawTable();
}

function editTable(index) {
    document.getElementById("name").value = table[index].name;
    document.getElementById("surname").value = table[index].surname;
    document.getElementById("date").value = table[index].date;
    document.getElementById("tur").value = table[index].select;

    selectedIndex = index;
}


