// $(window).on('scroll', function() {
//
//
//
//  });

window.addEventListener("scroll", topBar);
var bar = document.getElementById('scrollsDown');

function topBar(){
  if (document.documentElement.scrollTop > 200) {
    bar.classList.add("active");

  }else if( document.documentElement.scrollTop < 200) {
    bar.classList.remove("active");

  }
}
