// thanh nav co giãn

window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("navFix");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset === 0) {
    header.classList.remove("sticky-theme");
  } else {
    header.classList.add("sticky-theme");
  }
}

// chế độ sáng tối
var nutToi = document.getElementById("cheDoToi");
var nutSang = document.getElementById("cheDoSang");
nutSang.style.display = "none";

document.getElementById('cheDoToi').onclick = function(){
  document.getElementById("bodyOf-Studious").classList.remove("giaoDienSang");
  document.getElementById("bodyOf-Studious").classList.add("giaoDienToi");
  nutSang.style.display = 'inline-block'
  nutToi.style.display = 'none'
}
document.getElementById('cheDoSang').onclick = function(){
  document.getElementById("bodyOf-Studious").classList.remove("giaoDienToi");
  document.getElementById("bodyOf-Studious").classList.add("giaoDienSang");
  nutSang.style.display = 'none'
  nutToi.style.display = 'inline-block'
}