changeSize();
window.addEventListener('resize', changeSize);

function changeSize () {
    document.getElementById('contBlock').style.height = document.getElementById('contHeader').clientHeight + 'px';
}

document.getElementById('form').addEventListener('submit', function (e) {
    var message = document.getElementById('message').value;
    var subject = document.getElementById('subject').value;
    window.location.href = "mailto:hkpoverty@gmail.com?&subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(`${message}\n\nFrom: ${document.getElementById('first').value} ${document.getElementById('last').value}`);
})