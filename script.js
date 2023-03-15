var selectrow = null;
document.querySelector("#details").addEventListener("submit", (e) =>{
    e.preventDefault();

    const id = document.querySelector("#id").value;
    const pname = document.querySelector("#name").value;
    const price = document.querySelector("#price").value;
    const photo = document.querySelector("#photo").value;

    if(selectrow == null){
        const list = document.querySelector("#product-list");
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${id}</td>
            <td>${pname}</td>
            <td>${price}</td>
            <td><img src="${photo}"></td>
            <td><a href="#" class="btn btn-primary edit">Edit</a></td>
            <td><a href="#" class="btn btn-danger delete">Delete</a></td>
        `;
        list.appendChild(row);
        selectrow=null;
    }
    else{
        selectrow.children[0].textContent = id;
        selectrow.children[1].textContent = pname;
        selectrow.children[2].textContent = price;
        selectrow.children[3].textContent = photo;
        selectrow = null;
    }
});

document.querySelector('#product-list').addEventListener("click", (e) =>{
    if(e.target.classList.contains("edit")){
        selectrow = e.target.parentElement.parentElement;
        document.querySelector("#id").value = selectrow.children[0].textContent;
        document.querySelector("#name").value = selectrow.children[1].textContent;
        document.querySelector("#value").value = selectrow.children[2].textContent;
        document.querySelector("#photo").value = selectrow.children[3].textContent;
    }
})

document.querySelector('#product-list').addEventListener("click", (e) =>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.parentElement.remove();
    }
})

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

