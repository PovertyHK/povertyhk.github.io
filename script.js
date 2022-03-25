window.onscroll = function() {setScroll()};

checkCookiesEnabled();

var cookies;
if (!(typeof getCookie('allowCookies') === 'undefined')) {
  if (getCookie('allowCookies') == 'yes') {
    document.getElementById("cookieConsent").style.display = 'none';
  }
}

function setScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function checkCookiesEnabled(){
  var cookieEnabled = navigator.cookieEnabled;
  if (!cookieEnabled){ 
      document.cookie = "testcookie";
      cookieEnabled = document.cookie.indexOf("testcookie")!=-1;
  }
  return cookieEnabled || cookiesDisabled();
}

function cookiesDisabled(){
  document.getElementById('cookieConsent').style.display = 'none';
}

function copyEmail(email) {
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert("Copied Email to clipboard");
    })
    .catch(() => {
      alert("Something went wrong, please try again!");
    });
}

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return undefined;
}

function acceptCookies() {
  setCookie('allowCookies','yes');
}