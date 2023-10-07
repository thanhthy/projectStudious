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