let topIcon = document.querySelector('.scrollTop');
window.addEventListener('scroll',function(){
//document.body.scrollTop
let yOffset = window.pageYOffset;
if(yOffset>15){
  topIcon.style.display='block';
}
else{topIcon.style.display = "none";}
});

let inventory = document.querySelector('.itemDisplay');
let addButton = document.querySelectorAll('.add');
var counter = 0;

for (i=0;i<addButton.length;i++){
addButton[i].addEventListener('click',function(){
  counter++;
  inventory.innerHTML = counter + " Item(s) Checked";
});
}

function passvalues1(){
  let pp = document.querySelector('#product_price').value;
  let pn = document.querySelector('#product_name').value;
  let pi = document.querySelector('#product_img').value;
  localStorage.setItem('product_name',pn);
  localStorage.setItem('product_price', pp);
  localStorage.setItem('product_img', pi);
}
function passvalues2(){
  let pp = document.querySelector('#product_price2').value;
  let pn = document.querySelector('#product_name2').value;
  let pi = document.querySelector('#product_img2').value;
  localStorage.setItem('product_name',pn);
  localStorage.setItem('product_price', pp);
  localStorage.setItem('product_img', pi);
}

function passvalues3(){
  let pp = document.querySelector('#product_price3').value;
  let pn = document.querySelector('#product_name3').value;
    let pi = document.querySelector('#product_img3').value;
  localStorage.setItem('product_name',pn);
  localStorage.setItem('product_price', pp);
  localStorage.setItem('product_img', pi);
}

function passvalues4(){
  let pp = document.querySelector('#product_price4').value;
  let pn = document.querySelector('#product_name4').value;
  let pi = document.querySelector('#product_img4').value;
  localStorage.setItem('product_name',pn);
  localStorage.setItem('product_price', pp);
  localStorage.setItem('product_img', pi);
}

function passvalues5(){
  let pp = document.querySelector('#product_price5').value;
  let pn = document.querySelector('#product_name5').value;
  let pi = document.querySelector('#product_img5').value;
  localStorage.setItem('product_name',pn);
  localStorage.setItem('product_price', pp);
  localStorage.setItem('product_img', pi);
}

function passvalues6(){
  let pp = document.querySelector('#product_price6').value;
  let pn = document.querySelector('#product_name6').value;
  let pi = document.querySelector('#product_img6').value;
  localStorage.setItem('product_name',pn);
  localStorage.setItem('product_price', pp);
  localStorage.setItem('product_img', pi);
}
