const toggleButton = document.getElementById('toggle-sidebar');
const sidebar = document.getElementById('sidebar');

document.getElementById('toggle-sidebar').addEventListener('click', function () {
    sidebar.classList.toggle('d-none'); // Show or hide the sidebar
    toggleButton.classList.toggle('toggled'); 
});

toggleButton.addEventListener('click', function () {
    if (sidebar.classList.contains('show')) {
        toggleButton.innerHTML = '×'; // Change to "close" icon
    } else {
        toggleButton.innerHTML = '☰'; // Change back to "menu" icon
    }
});