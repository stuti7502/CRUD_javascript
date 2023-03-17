
function validateForm(){
  let id = document.querySelector("#id").value;
  let pname = document.querySelector("#pname").value;
  let price = document.querySelector("#price").value;
  let photo = document.querySelector("#photo").value;
  if(id==""){
    alert("id required");
    return false;    
  }else if(isNaN(id)){
    alert("Enter number in id")
  }
  if(pname==""){
    alert("pname required");
    return false;    
  }
  if(price==""){
    alert("price required");
    return false;    
  }else if(isNaN(price)){
    alert("Enter number in price")
  }
  if(photo==""){
    alert("photo required");
    return false;    
  }
  return true;
}
 
let pId = document.getElementById('id');
let pName = document.getElementById('pname');
let pImage = document.getElementById('photo');
let pPrice = document.getElementById('price');


function addData() {
  if(validateForm() == true){
  var product;
  if (localStorage.getItem('productArray') == null) {
    product = [];
  } else {
    product = JSON.parse(localStorage.getItem('productArray'));
  }
  product.push({
    id: pId.value,
    name: pName.value,
    price: pPrice.value,
    photo: pImage.value,
    
  });
  
  localStorage.setItem('productArray', JSON.stringify(product));

  location.reload();
}
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
        <td>${element.price}</td>
        <td><div style="width:100px; height:100px;"><img style="max-width: 100%; max-height:100%;" src="${element.photo}"/></div></td>
        
        <td><button type="button" class="btn btn-primary" onclick='updateData(${index})'><i class="fa fa-pencil" aria-hidden="true"></i></button></td>
        <td><button type="button" class="btn btn-danger" onclick='deleteData(${index})'><i class="fa fa-trash" aria-hidden="true"></i></button></td>
        </tr>`;


    document.getElementById("product-list").innerHTML = html;


    });
  
}
function deleteData(index){
  let product;
  if (localStorage.getItem("productArray") == null) {
      product = [];
  }
  else {
      product = JSON.parse(localStorage.getItem("productArray"));
  }
  let deleted = confirm("Do you want to delete this product" + product[index.name] + "?");
  if(deleted == true){
    product.splice(index, 1)
    localStorage.setItem('productArray', JSON.stringify(product));
    location.reload();
  }
}

function updateData(index){
  document.getElementById('submit').style.display = "none";
  document.getElementById('update').style.display = "block";
  
  let product;
  if (localStorage.getItem("productArray") == null) {
      product = [];
  }
  else {
      product = JSON.parse(localStorage.getItem("productArray"));
  }
  
  document.getElementById('id').value = product[index].id;
  document.getElementById('pname').value = product[index].name;
  document.getElementById('price').value = product[index].price;
  document.getElementById('photo').value = product[index].photo;

  document.querySelector("#update").onclick = function(){
    if(validateForm() == true){
      product[index].id = document.getElementById('id').value;
      product[index].name = document.getElementById('pname').value;
      product[index].price = document.getElementById('price').value;
      product[index].photo = document.getElementById('photo').value;

      localStorage.setItem('productArray', JSON.stringify(product));

      viewData();

      document.getElementById('id').value = "";
      document.getElementById('pname').value = "";
      document.getElementById('price').value = "";
      document.getElementById('photo').value = "";

      document.getElementById('submit').style.display = "block";
      document.getElementById('update').style.display = "none";
    }
  }

}

function searchid(){
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchbar");
  filter = input.value.toUpperCase();
  table = document.getElementById("sort-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
function asc(n){
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("sort-table");
  switching = true;
  dir = "asc"; 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
    
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
    
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
          
        }
        
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;      
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
  if(dir == "asc" && n == 0){
    document.getElementById('down').style.display = "none";
    document.getElementById('up').style.display = "inline";
    document.getElementById('down1').style.display = "inline";
    document.getElementById('up1').style.display = "inline";
    document.getElementById('down2').style.display = "inline";
    document.getElementById('up2').style.display = "inline";
  }else if(dir == "desc" && n==0){
    document.getElementById('down').style.display = "inline";
    document.getElementById('up').style.display = "none";
    document.getElementById('down1').style.display = "inline";
    document.getElementById('up1').style.display = "inline";
    document.getElementById('down2').style.display = "inline";
    document.getElementById('up2').style.display = "inline";
}else if(dir == "asc" && n==1){
    document.getElementById('down').style.display = "inline";
    document.getElementById('up').style.display = "inline";
    document.getElementById('down1').style.display = "none";
    document.getElementById('up1').style.display = "inline";
    document.getElementById('down2').style.display = "inline";
    document.getElementById('up2').style.display = "inline";
}else if(dir == "desc" && n==1){
    document.getElementById('down').style.display = "inline";
    document.getElementById('up').style.display = "inline";
    document.getElementById('down1').style.display = "inline";
    document.getElementById('up1').style.display = "none";
    document.getElementById('down2').style.display = "inline";
    document.getElementById('up2').style.display = "inline";
}else if(dir == "asc" && n==2){
    document.getElementById('down').style.display = "inline";
    document.getElementById('up').style.display = "inline";
    document.getElementById('down1').style.display = "inline";
    document.getElementById('up1').style.display = "inline";
    document.getElementById('down2').style.display = "none";
    document.getElementById('up2').style.display = "inline";
}else if(dir == "desc" && n==2){
    document.getElementById('down').style.display = "inline";
    document.getElementById('up').style.display = "inline";
    document.getElementById('down1').style.display = "inline";
    document.getElementById('up1').style.display = "inline";
    document.getElementById('down2').style.display = "inline";
    document.getElementById('up2').style.display = "none";
  }else{
    document.getElementById('down').style.display = "inline";
    document.getElementById('up').style.display = "inline";
    document.getElementById('down1').style.display = "inline";
    document.getElementById('up1').style.display = "inline";
    document.getElementById('down2').style.display = "inline";
    document.getElementById('up2').style.display = "inline";    
  }     
}

