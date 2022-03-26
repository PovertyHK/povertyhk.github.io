document.getElementById('achiWrap3').onclick = function() {

    var className = ' ' + this.className + ' ';

    this.className = ~className.indexOf(' active ') ?
                         className.replace(' active ', ' ') :
                         this.className + ' active';
}