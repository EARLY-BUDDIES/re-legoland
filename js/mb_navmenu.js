function toggleSubmenu(menuItem) {
  menuItem.classList.toggle('active');
  const submenu = menuItem.querySelector('.submenu');
  if (submenu.style.display === 'block') {
    submenu.style.animation = 'fade-out 0.3s';
    setTimeout(() => {
      submenu.style.display = 'none';
      submenu.style.animation = '';
    }, 300);
  } else {
    submenu.style.display = 'block';
    submenu.style.animation = 'fade-in 0.3s';
  }
}
