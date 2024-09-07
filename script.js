// Function to open the drawer
function openDrawer() {
    document.getElementById("drawer").style.width = "250px";
}

// Function to close the drawer
function closeDrawer() {
    document.getElementById("drawer").style.width = "0";
}

// Close the drawer if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#drawerButton') && !event.target.closest('.drawer')) {
        closeDrawer();
    }
}

// cursor

let cursor = document.querySelector('.cursor');
let cursorPoint = document.querySelector('.cursor_point');
function numberRandom(min, max) {
    return Math.round(Math.random() + (max - min) + min);
}
window.addEventListener('mousemove', function(evt) {
    let x = evt.x;
    let y = evt.y;

    setTimeout(() => {
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    }, 60);
    setTimeout(() => {
        cursorPoint.style.left = x + 'px';
        cursorPoint.style.top = y + 'px';
    }, 30);
})
window.addEventListener('mousedown', function(evt) {
    cursor.classList.add('click');
    cursorPoint.classList.add('click');
    let shadow = document.createElement('div');
    shadow.className = 'shadow';
    let number = numberRandom(80, 200);
    cursor.appendChild(shadow);
    setTimeout(() => {
        shadow.style.width = number + 'px';
        shadow.style.height = number + 'px';
        shadow.classList.add('active');
    }, 10);
    setTimeout(() => {
        cursor.removeChild(shadow)
    }, 600);
});

window.addEventListener('mouseup', function(evt) {
    cursor.classList.remove('click');
    cursorPoint.classList.remove('click');
})