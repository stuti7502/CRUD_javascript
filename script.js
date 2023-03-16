function addData(){
  if(validateForm() == true)
var selectrow = null;
document.querySelector("#details").addEventListener("submit", (e) =>{
    e.preventDefault();
    let id = document.querySelector("#id").value;
    let pname = document.querySelector("#pname").value;
    let price = document.querySelector("#price").value;
    let photo = document.querySelector("#photo").value;
    // console.log("ID:",id);

    if(selectrow == null){
        const list = document.querySelector("#product-list");
        const row = document.createElement("tr");
        var productList;
        if(localStorage.getItem("productList") == null){
          productList = [];
        }
        else{
          productList = JSON.parse(localStorage.getItem("productList"))
        }
        
        productList.push({
          id: id,
          pname: pname,
          price: price,
          photo: photo,
        });
    
    
          localStorage.setItem("productList", JSON.stringify(productList));
    row.innerHTML = `
            <td>${id}</td>
            <td>${pname}</td>
            <td>${price}</td>
            <td><img src="${photo}"></td>
            <td><a href="#" class="btn btn-primary edit">Edit</a></td>
            <td><a href="#" class="btn btn-danger delete">Delete</a></td>
        `
        ;
        // localStorage.setItem("id", id);
        list.appendChild(row);
        selectrow=null;
      }
    else{
        selectrow = null;
    }
  
}
);
}
  
document.querySelector('#product-list').addEventListener("click", (e) =>{
    if(e.target.classList.contains("edit")){
        selectrow = e.target.parentElement.parentElement;
        document.querySelector("#id").value = selectrow.children[0].textContent;
        document.querySelector("#pname").value = selectrow.children[1].textContent;
        document.querySelector("#price").value = selectrow.children[2].textContent;
        document.querySelector("#photo").value = selectrow.children[3].textContent;
    }
})

document.querySelector('#product-list').addEventListener("click", (e) =>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.parentElement.remove();
    }
})

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
}
 
function show(){
  var productList;
  if(localStorage.getItem("productList") == null){
    productList = [];
  }
  else{
    productList = JSON.parse(localStorage.getItem("productList"))
  }

  var list=""

  productList.forEach(function(element){
    list +="<tr>";
    list += "<td>"+element.id+"</td>";
    list += "<td>"+element.pname+"</td>";
    list += "<td>"+element.price+"</td>";
    list += `<td><img src="${element.photo}"</td>`;
    list += '<td><button class="btn btn-primary edit">Edit</button></td>'
    list += '<td><button class="btn btn-primary delete">Delete</button></td>'
    list += "</tr>";
  });
  document.querySelector('#product-list').innerHTML = list;
}
document.onload = show();

// function addData(){
//   if(validateForm() == true){
//     var id = document.querySelector("#id").value;
//     var pname = document.querySelector("#pname").value;
//     var price = document.querySelector("#price").value;
//     var photo = document.querySelector("#photo").value;
//     var selectrow;
//     if(selectrow == null){
//     const list = document.querySelector("#product-list");
//     const row = document.createElement("tr");
    
//     var productList;
//     if(localStorage.getItem("productList") == null){
//       productList = [];
//     }
//     else{
//       productList = JSON.parse(localStorage.getItem("productList"))
//     }
  
//     productList.push({
//       id: id,
//       pname: pname,
//       price: price,
//       photo: photo,
//     });
//     localStorage.setItem("productList", JSON.stringify('productList'));
//     show();
//     row.innerHTML = `
//           <td>${id}</td>
//              <td>${pname}</td>
//              <td>${price}</td>
//              <td><img src="${photo}"></td>
//              <td><a href="#" class="btn btn-primary edit">Edit</a></td>
//              <td><a href="#" class="btn btn-danger delete">Delete</a></td>
//          `
//          ;
// //         // localStorage.setItem("id", id);
//      list.appendChild(row);
//   }
// }
// }
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

