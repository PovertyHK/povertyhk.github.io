changeSize();
window.addEventListener('resize', changeSize);

function changeSize () {
    document.getElementById('contBlock').style.height = (document.getElementById('contHeader').clientHeight + document.getElementById('myBar').clientHeight).toString() + 'px';
}

document.getElementById('form').addEventListener('submit', function (e) {
    var message = document.getElementById('message').value;
    window.location.href = "mailto:hkpoverty@gmail.com?&subject="+encodeURIComponent("Message")+"&body="+encodeURIComponent(message);
    e.preventDefault();
})