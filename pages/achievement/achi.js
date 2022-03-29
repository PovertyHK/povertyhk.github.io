function dropdown(item) {

    var className = ' ' + item.className + ' ';

    item.className = ~className.indexOf(' active ') ?
                         className.replace(' active ', ' ') :
                         item.className + ' active';
}