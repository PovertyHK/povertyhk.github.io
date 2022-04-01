changeSize();
window.addEventListener('resize', changeSize);

function changeSize () {
    document.getElementById('achiBlock').style.height = (document.getElementById('achiHeader').clientHeight + document.getElementById('myBar').clientHeight).toString() + 'px';
}