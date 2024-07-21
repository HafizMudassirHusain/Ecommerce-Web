var products = []
 var pid = document.getElementById('pid')
 var pname = document.getElementById('pname')
 var pdes = document.getElementById('pdes')
 var pprice = document.getElementById('pprice')
 var pimg = document.getElementById('pimg')
 var getmenu = document.getElementById('menu-objects')
function addItems(){
let obj = {
  id:pid.value,
  name:pname.value,
  description:pdes.value,
  price:pprice.value,
  img:pimg.value
}
products.push(obj)
localStorage.setItem('menucard',JSON.stringify(products))
}
var convert = JSON.parse(localStorage.getItem('menucard'))
console.log(convert)
convert.forEach((data) => {
  // console.log(data)
  getmenu.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${data.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.id}</h5>
    <h2 class="card-title">${data.name}</h2>
    <p class="card-text">${data.description}</p>
    <h5 class="card-title">${data.price}</h5>
    <button class="btn btn-primary">EdiT btn</button>
    <button class="btn btn-primary">Delete btn</button>
  </div>
</div>`;
});


// ======================================================
