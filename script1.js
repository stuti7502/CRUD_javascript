let pId = document.getElementById('id');
let pName = document.getElementById('pname');
let pImage = document.getElementById('photo');
let pPrice = document.getElementById('price');


function addData() {
  let product;
  if (localStorage.getItem('productArray') == null) {
    product = [];
  } else {
    product = JSON.parse(localStorage.getItem('productArray'));
  }
  product.push({
    id: pId.value,
    name: pName.value,
    photo: pImage.value,
    price: pPrice.value,
  });


  localStorage.setItem('productArray', JSON.stringify(product));
  location.reload();
}


viewData();


function viewData(){
    let product;
    if (localStorage.getItem("productArray") == null) {
        product = [];
    }
    else {
        product = JSON.parse(localStorage.getItem("productArray"));
    }
    let html = "";
    product.forEach(function (element, index) {
        html += `<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td><div style="width:100px; height:100px;"><img style="max-width: 100%; max-height:100%;" src="${element.photo}"/></div</td>
        <td>${element.price}</td>
        <td><button type="button" class="btn btn-primary" onclick='editData(${index})'><i class="fa fa-pencil" aria-hidden="true"></i></button></td>
        <td><button type="button" class="btn btn-danger" onclick='deleteData(${index})'><i class="fa fa-trash" aria-hidden="true"></i></button></td>
        </tr>`;


    document.getElementById("product-list").innerHTML = html;


    });
}