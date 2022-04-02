setScreen();

window.addEventListener("scroll", setScreen);
window.addEventListener("resize", setScreen);

function setScreen () {
  var navHeader = document.getElementById('indexHeader');
  var navBar = document.getElementById('indexNav');
  var navLogo = document.getElementById('indexLogo');
  var blocker = document.getElementById('contentBlock');
  if (document.documentElement.clientWidth > 1025) {
    blocker.style.display = 'none';
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let scroll = 1;
    if (scrollTop >= scroll) {
      navBar.classList.remove("indexNav");
      navHeader.classList.remove("indexHeader");
      navLogo.classList.remove("indexLogo");
      navHeader.classList.remove('headerFadeTransparent');
    } else {
      navBar.classList.add("indexNav");
      navHeader.classList.add("indexHeader");
      navLogo.classList.add("indexLogo");
      navHeader.classList.remove('headerFadeWhite');
    }

    if (scrollTop >= scroll && !(navHeader.classList.contains('headerFadeWhite'))) {
      headerFadeW();
    } else if (scrollTop < scroll && !(navHeader.classList.contains('headerFadeTransparent'))) {
      headerFadeT();
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
  document.getElementById("myBar").style.width = scrolled + "%";
}
  
function headerFadeT() {
    var navHeader = document.getElementById('indexHeader');
    if (navHeader.classList.contains('headerFadeTransparent')) {
        var navItm = navHeader.cloneNode(true);
        navHeader.parentNode.replaceChild(navItm,navHeader);
    } else {
        navHeader.classList.add('headerFadeTransparent')
    }
}

function headerFadeW() {
    var navHeader = document.getElementById('indexHeader');
    if (navHeader.classList.contains('headerFadeWhite')) {
        var navItm = navHeader.cloneNode(true);
        navHeader.parentNode.replaceChild(navItm,navHeader);
    } else {
        navHeader.classList.add('headerFadeWhite')
    }
}