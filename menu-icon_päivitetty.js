// Hamburger-menu toggle
document.getElementById('menu-icon').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('show');
});

// Sulkee hamburger-menun linkin klikkauksen jälkeen
function closeMenu() {
    document.getElementById('nav-links').classList.remove('show');
}