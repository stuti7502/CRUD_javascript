let pId = document.getElementById('id');
let pName = document.getElementById('pname');
let pImage = document.getElementById('photo');
let pPrice = document.getElementById('price');

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
      alert("Name required");
      return false;    
    }
    if(price==""){
      alert("Price required");
      return false;    
    }else if(isNaN(price)){
      alert("Enter number in price")
    }
    if(photo==""){
      alert("Photo required");
      return false;    
    }
    
    return true;
}

function addData() {
  if(validateForm() == true){
  var product;
  if (localStorage.getItem('productArray') == null) {
    product = [];
  } else {
    product = JSON.parse(localStorage.getItem('productArray'));
  }
  let reader = new FileReader();
  reader.readAsDataURL(pImage.files[0]);
  reader.addEventListener('load', () => {
  let photos = reader.result;
  
  product.push({
    id: pId.value,
    name: pName.value,
    price: pPrice.value,
    photo: photos,
    
  });
  
  localStorage.setItem('productArray', JSON.stringify(product));

  location.reload();
});
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
        html += `<tr>`
        html += `<td>${element.id}</td>`
        html += `<td>${element.name}</td>`
        html += `<td>${element.price}</td>`
        html += `<td><div style="width:150px; height:100px;"><img style="max-width: 100%; max-height:100%;" src="${element.photo}"/></div></td>`
        html += `<td><button type="button" class="btn btn-primary" onclick='updateData(${index})'><i class="fa fa-pencil" aria-hidden="true"></i></button></td>`
        html += `<td><button type="button" class="btn btn-danger" onclick='deleteData(${index})'><i class="fa fa-trash" aria-hidden="true"></i></button></td>`
        html += `</tr>`


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
  let deleted = confirm("Do you want to delete this product " + product[index].name + "?");
  if(deleted == true){
    product.splice(index, 1)
    localStorage.setItem('productArray', JSON.stringify(product));
    location.reload();
  }
}
// function onEdit(this){
//   let product;
//     if (localStorage.getItem("productArray") == null) {
//         product = [];
//     }
//     else {
//         product = JSON.parse(localStorage.getItem("productArray"));
//     }
//   selectedRow = td.parentElement.parentElement;
//   document.getElementById('id').value = selectedRow.cells[0].innerHTML;
//     document.getElementById('pname').value = selectedRow.cells[1].innerHTML;
//     document.getElementById('price').value = selectedRow.cells[2].innerHTML;
//     document.getElementById('photo').value = selectedRow.cells[3].innerHTML;
// }

// function updateRecord(product){
//   let product;
//     if (localStorage.getItem("productArray") == null) {
//         product = [];
//     }
//     else {
//         product = JSON.parse(localStorage.getItem("productArray"));
//     }
//   selectedRow.cells[0].innerHTML = product.id;
//   selectedRow.cells[1].innerHTML = product.pname;
//   selectedRow.cells[2].innerHTML = product.price;
//   selectedRow.cells[3].innerHTML = product.photos;
//   localStorage.setItem('productArray', JSON.stringify(product));
// }
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
  // let reader = new FileReader();
  //   reader.readAsDataURL(pImage.files[0]);
  //   reader.addEventListener('load', () => {
  //   let photos = reader.result;
    
    document.getElementById('id').value = product[index].id;
    document.getElementById('pname').value = product[index].name;
    document.getElementById('price').value = product[index].price;
    document.getElementById('photo').value = null;
  // })
  document.querySelector("#update").onclick = function(){
    
    // if(validateForm() == true){  
    let reader = new FileReader();
    reader.readAsDataURL(pImage.files[0]);
    reader.addEventListener('load', () => {
      let photos = reader.result;
      product[index].id = document.getElementById('id').value;
      product[index].name = document.getElementById('pname').value;
      product[index].price = document.getElementById('price').value;
      product[index].photo = photos;

      localStorage.setItem('productArray', JSON.stringify(product));

      viewData();

      // document.getElementById('id').value = "";
      // document.getElementById('pname').value = "";
      // document.getElementById('price').value = "";
      // document.getElementById('photo').value = "";

      document.getElementById('submit').style.display = "block";
      document.getElementById('update').style.display = "none";
    })}
  }
    
  // function updateData(index) {
  //   document.getElementById('submit').style.display = "none";
  //  document.getElementById('update').style.display = "block";
  //   let productInfo = JSON.parse(localStorage.getItem('productArray'))[index];
  //   document.getElementById('id').value = productInfo.id;
  //   document.getElementById('pname').value = productInfo.name;
  //   editImage = productInfo.photo;
  //   document.getElementById('price').value = productInfo.price;
  //   // document.querySelector("#update").onclick = function(){
  //   let idx = editIndex;
  //   let id = document.getElementById('id').value;
  //   let name = document.getElementById('pname').value;
  //   let photo = document.getElementById('photo');
  //   let price = document.getElementById('price').value;
    
    
  //   if (photo.value != '') {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(photo.files[0]);
  //     reader.addEventListener('load', () => {
  //       let url = reader.result;
  //       let updatedData = { id, name, price, photo: url};
  //       let productInfo = JSON.parse(localStorage.getItem('productArray'));
  //       productInfo[idx] = updatedData;
  //       localStorage.setItem('productArray', JSON.stringify(productInfo));
  //     });
  //   } else {
  //     let updatedData = { id, name, price, photo: editImage};
  //     let productInfo = JSON.parse(localStorage.getItem('productArray'));
  //     productInfo[idx] = updatedData;
  //     localStorage.setItem('productArray', JSON.stringify(productInfo));
  //   }
  //   editIndex = null;
  //   location.reload();
  // }
// }



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
  var down = document.getElementById('down');
  var up = document.getElementById('up');
  var down1 = document.getElementById('down1');
  var up1 = document.getElementById('up1');
  var down2 = document.getElementById('down2');
  var up2 = document.getElementById('up2');
  if(dir == "asc" && n == 0){
    down.style.display = "none";  up.style.display = "inline";
    down1.style.display = "inline"; up1.style.display = "inline";
    down2.style.display = "inline"; up2.style.display = "inline";
  }else if(dir == "desc" && n==0){
    down.style.display = "inline";  up.style.display = "none";
    down1.style.display = "inline"; up1.style.display = "inline";
    down2.style.display = "inline"; up2.style.display = "inline";
}else if(dir == "asc" && n==1){
    down.style.display = "inline";  up.style.display = "inline";
    down1.style.display = "none"; up1.style.display = "inline";
    down2.style.display = "inline"; up2.style.display = "inline";
}else if(dir == "desc" && n==1){
    down.style.display = "inline";  up.style.display = "inline";
    down1.style.display = "inline"; up1.style.display = "none";
    down2.style.display = "inline"; up2.style.display = "inline";
}else if(dir == "asc" && n==2){
    down.style.display = "inline";  up.style.display = "inline";
    down1.style.display = "inline"; up1.style.display = "inline";
    down2.style.display = "none"; up2.style.display = "inline";
}else if(dir == "desc" && n==2){
    down .style.display= "inline";  up.style.display = "inline";
    down1.style.display = "inline"; up1.style.display = "inline";
    down2.style.display = "inline"; up2.style.display = "none";
  }else{
    down.style.display = "inline";  up.style.display = "inline";
    down1.style.display = "inline"; up1.style.display = "inline";
    down2.style.display = "inline"; up2.style.display = "inline";    
  }     
}
