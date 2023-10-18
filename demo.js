// email color element page
document.getElementById('staticEmail').style.color = 'gray'
// thanh cuộn fix posion 
window.onscroll = function () {
  myFunction();
};
var header = document.getElementById("ficNav2");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset === 0) {
    header.classList.remove("sticky-theme");
  } else {
    header.classList.add("sticky-theme");
  }
}
//giao diện tối js 
var nutToi = document.getElementById("tatDen");
var nutSang = document.getElementById("batDen");
nutSang.style.display = "none";

document.getElementById('tatDen').onclick = function(){
  document.getElementById("bodySof-Studiou").classList.remove("giaoDienSang");
  document.getElementById("bodySof-Studiou").classList.add("giaoDienToi");
  nutSang.style.display = 'inline-block'
  nutToi.style.display = 'none'
}
document.getElementById('batDen').onclick = function(){
  document.getElementById("bodySof-Studiou").classList.remove("giaoDienToi");
  document.getElementById("bodySof-Studiou").classList.add("giaoDienSang");
  nutSang.style.display = 'none'
  nutToi.style.display = 'inline-block'
}