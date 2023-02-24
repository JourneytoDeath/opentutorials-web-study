const target = document.querySelector('body');
const alist = document.querySelectorAll('a');

function setLinkColor(color) {
    $('a').css('color', color);
}

function modeHandler(btn) {
    if (btn.innerText === 'Dark') {
        btn.innerText = 'Light';
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        setLinkColor('white');
    } else {
        btn.innerText = 'Dark';
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        setLinkColor('black');
    }
}