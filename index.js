if (document.documentElement.clientWidth <= 1025) {
  document.getElementById('header').classList.remove("indexHeader");
  document.getElementById('indexNav').classList.remove("indexNav");
  document.getElementById('indexLogo').classList.remove("indexLogo");
  document.getElementById('contentBlock').style.display = 'block';
}

window.addEventListener("scroll", setScreen);
window.addEventListener("resize", setScreen);

function setScreen () {
  var navHeader = document.getElementById('header');
  var navBar = document.getElementById('indexNav');
  var navLogo = document.getElementById('indexLogo');
  var blocker = document.getElementById('contentBlock');
  if (document.documentElement.clientWidth > 1025) {
    blocker.style.display = 'none';
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let scroll = 108;
    if (scrollTop >= scroll) {
      navBar.classList.remove("indexNav");
      navHeader.classList.remove("indexHeader");
      navLogo.classList.remove("indexLogo");
    } else {
      navBar.classList.add("indexNav");
      navHeader.classList.add("indexHeader");
      navLogo.classList.add("indexLogo");
    }
  } else {
    blocker.style.display = 'block';
    navBar.classList.remove("indexNav");
    navHeader.classList.remove("indexHeader");
    navLogo.classList.remove("indexLogo");
  }

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled.toString() + "%";
}