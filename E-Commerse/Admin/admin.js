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
    <button class="btn btn-primary" onclick="delt(this)">Delete btn</button>
  </div>
</div>`;
});
// ======================================================
function delt(data){
data.parentNode.parentNode.remove();
}


function view1(){
  var view = document.getElementById('callingdiv')
  view.childNodes[1].style.display ='block';
  view.childNodes[3].style.display ='none';
  view.childNodes[5].style.display ='none';
  view.childNodes[7].style.display ='none';
  view.childNodes[9].style.display ='none';
}
function view2(){
  var view = document.getElementById('callingdiv')
  view.childNodes[1].style.display ='none';
  view.childNodes[3].style.display ='block';
  view.childNodes[5].style.display ='none';
  view.childNodes[7].style.display ='none';
  view.childNodes[9].style.display ='none';
}
function view3(){
  var view = document.getElementById('callingdiv')
  view.childNodes[1].style.display ='none';
  view.childNodes[3].style.display ='none';
  view.childNodes[5].style.display ='block';
  view.childNodes[7].style.display ='none';
  view.childNodes[9].style.display ='none';
}
function view4(){
  var view = document.getElementById('callingdiv')
  view.childNodes[1].style.display ='none';
  view.childNodes[3].style.display ='none';
  view.childNodes[5].style.display ='none';
  view.childNodes[7].style.display ='block';
  view.childNodes[9].style.display ='none';
}
function view5(){
  var view = document.getElementById('callingdiv')
  view.childNodes[1].style.display ='none';
  view.childNodes[3].style.display ='none';
  view.childNodes[5].style.display ='none';
  view.childNodes[7].style.display ='none';
  view.childNodes[9].style.display ='block';
}