var registerForm=document.querySelector(".registerForm");
var productName=document.querySelector("#productName");
var description=document.querySelector("#description");
var productPrice=document.querySelector("#productPrice");
var products=[];
registerForm.onsubmit=function sub(e){
  e.preventDefault();
  var product={
    name:productName.value,
    description:description.value,
    price:productPrice.value
  }
  products.push(product);
  printData();
}
function printData(){
  data="";
  for(var i=0;i<products.length;i++){
    data+=`<tr>
    <td>
    ${products[i].name}
    </td>
    <td>
    ${products[i].description}
    </td>
    <td>
    ${products[i].price}
    </td>
    </tr>`
  }
  document.querySelector(".data").innerHTML=data;
}