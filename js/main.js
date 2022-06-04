
let products = [];
let selectedIndex = -1;

function addProduct() {
    let productName = document.getElementById("name").value;
    let productPrice = document.getElementById("price").value;
    let productColor = document.getElementById("color").value;

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("color").value = "";

    let newProduct = {
        name: productName,
        price: productPrice,
        color: productColor
    }

    if (selectedIndex >= 0){
        products[selectedIndex] = newProduct;
        selectedIndex = -1;
    } else {
        products.push(newProduct);
    }

    drawPage();
}

function drawPage() {
    let result = "";
    for (let i = 0; i < products.length; i++){
        result +=
            "<div class='col-4 mt-3'>" +
            "<div class='card'>" +
            "<div class='card-header'><h5>"+ products[i].name +"</h5></div>" +
            "<div class='card-body'>" +
            "<p>Price: <b>"+ products[i].price +"$</b></p>" +
            "<p style='color: "+ products[i].color +"'>Color: <b>"+ products[i].color +"</b></p>" +
            "</div>" +
            "<div class='card-footer d-flex justify-content-between align-items-center'>" +
            "<button type='button' class='btn btn-success' onclick='editProduct("+ i +")'>Edit</button>" +
            "<button type='button' class='btn btn-danger' onclick='deleteProduct("+ i +")'>Delete</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
    document.getElementById("result").innerHTML = result;
}

function deleteProduct(index) {
    products.splice(index, 1);
    drawPage();
}

function editProduct(index) {
    document.getElementById("name").value = products[index].name;
    document.getElementById("price").value = products[index].price;
    document.getElementById("color").value = products[index].color;

    selectedIndex = index;
}