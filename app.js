// first card
let serial = 0;
document.getElementById('first-card-btn').addEventListener('click',function(){
    //serial update
    serial += 1;
    //   get the data from htm using id
    const productName = document.getElementById("first-name").innerText;
    const productPrice = document.getElementById("first-price").innerText;
    const productQuantity = document.getElementById("first-quantity").innerText;
    const priceResult = parseInt(productPrice)+parseInt(productQuantity);
    
    // console.log(serial,productName,productPrice,productQuantity,priceResult)

    // call common function
    setData(serial,productName,productPrice,productQuantity,priceResult);
    disabledButton('first-card-btn')
})
document.getElementById('second-card-btn').addEventListener('click',function(){
    //serial update
    serial += 1;
    //   get the data from htm using id
    const productName = document.getElementById("second-name").innerText;
    const productPrice = document.getElementById("second-price").innerText;
    const productQuantity = document.getElementById("second-quantity").innerText;
    const priceResult = parseInt(productPrice)-parseInt(productQuantity);
    
    // console.log(serial,productName,productPrice,productQuantity,priceResult)

    // call common function
    setData(serial,productName,productPrice,productQuantity,priceResult);
})
// third card
document.getElementById('third-card-btn').addEventListener('click',function(e){
    // console.log(e.target.parentNode.parentNode.children[0].innerText);
    //serial update
    serial += 1;
    //   get the data from htm using id
    const productName = e.target.parentNode.parentNode.children[0].innerText;
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const priceResult = parseInt(productPrice)*parseInt(productQuantity);
    
    console.log(serial,productName,productPrice,productQuantity,priceResult)

    // call common function
    setData(serial,productName,productPrice,productQuantity,priceResult);
})
// Fourth card
document.getElementById('fourth-card-btn').addEventListener('click',function(e){
    // console.log(e.target.parentNode.parentNode.children[0].innerText);
    //serial update
    serial += 1;
    //   get the data from htm using id
    const productName = document.getElementById("fourth-name").innerText;
    const productPrice = document.getElementById("fourth-price").innerText;
    const productQuantity = document.getElementById("fourth-quantity").innerText;
    const priceResult = (parseInt(productPrice)/parseInt(productQuantity)).toFixed(2);
    
    // console.log(serial,productName,productPrice,productQuantity,priceResult)

    // call common function
    setData(serial,productName,productPrice,productQuantity,priceResult);
})
document.getElementById('fifth-card-btn').addEventListener('click',function(e){
    // console.log(e.target.parentNode.parentNode.children[0].innerText);
    //serial update
    serial += 1;
    //   get the data from htm using id
    const productName = document.getElementById("fifth-name").innerText;
    const productPrice = document.getElementById("fifth-price").value;
    const productQuantity = document.getElementById("fifth-quantity").value;
    
    if (
        productPrice == "" ||
        productQuantity == "" ||
        productPrice <= 0 ||
        productQuantity <= 0
      ) {
        return alert("please enter any valid number");
      }
    const priceResult = (parseInt(productPrice))%(parseInt(productQuantity));
    
    // console.log(serial,productName,productPrice,productQuantity,priceResult)

    // call common function
    setData(serial,productName,productPrice,productQuantity,priceResult);
})
// common function to set data
function setData(serial,productName,productPrice,productQuantity,priceResult){
    const container =document.getElementById('tableContainer');

    const tr = document.createElement('tr');
    tr.innerHTML =`
        <td>${serial}</td>
        <td>${productName}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>
        <td>${priceResult}</td>
    `;
    container.appendChild(tr);
    document.getElementById("total-product").innerText = serial;
}
function disabledButton(id) {
    document.getElementById(id).setAttribute("disabled", true);
  }