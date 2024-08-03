document.addEventListener('click', (e) => {
    const isButton = e.target.matches('.dropButton');
    if(!isButton && e.target.closest('.dropdownContent') != null) return;

    let currentDropdown=null;
    if(isButton) {
        currentDropdown = e.target.closest('.dropdown');
        currentDropdown.classList.toggle('open');
    }
    
    document.querySelectorAll('.dropdown.open').forEach(dropdown => {
        if(dropdown != currentDropdown) {
            dropdown.classList.remove('open');
        }
    });
});