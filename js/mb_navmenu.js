function toggleSubmenu(menuItem) {
  const submenu = menuItem.querySelector('.submenu');
  const allSubmenus = document.querySelectorAll('.submenu');
  const parentMenuItems = document.querySelectorAll('.menu-item');

  if (submenu.style.display === 'block') {
    submenu.style.display = 'none';
    menuItem.classList.remove('active');
  } else {
    // Close all submenus and remove active class from other menu items
    allSubmenus.forEach((sub) => {
      sub.style.display = 'none';
    });
    parentMenuItems.forEach((parentItem) => {
      parentItem.classList.remove('active');
    });

    submenu.style.display = 'block';
    menuItem.classList.add('active');
  }
}
