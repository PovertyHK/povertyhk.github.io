changeSize();
window.addEventListener('resize', changeSize);

function changeSize () {
    document.getElementById('contBlock').style.height = (document.getElementById('contHeader').clientHeight + document.getElementById('myBar').clientHeight).toString() + 'px';
}

document.getElementById('form')