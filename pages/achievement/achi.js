function dropdown(item) {

    var className = ' ' + item.className + ' ';
    var links = item.getElementsByClassName('achiLink')[0];

    if (~className.indexOf(' active ')) {
        item.className = className.replace(' active ', ' ');
        links.tabIndex = -1;
    } else {
        item.className = className + ' active';
        links.tabIndex = 0;
    }
}

const events = ['click', 'touchend', 'keypress', 'onkeydown']

var dropdownBlock = document.getElementsByClassName('achiWrap');

for(let i=0; i < dropdownBlock.length; i++) {
    events.forEach( function (evt) {
        dropdownBlock[i].addEventListener(evt, function() {
            dropdown(this);
        }, false);
    });
}

var dropdownLinks = document.getElementsByClassName('achiLink');

for(let i=0; i < dropdownLinks.length; i++) {
    events.forEach( function (evt) {
        dropdownLinks[i].addEventListener(evt, function() {
            window.location = 'achievements/'+dropdownLinks[i].getAttribute('name')+'.html';
        }, false);
    });
}