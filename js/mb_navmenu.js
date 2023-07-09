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

function toggleMenu() {
  var menuContainer = document.querySelector('.navmenu-container');
  menuContainer.classList.toggle('menu-open');
}

function closeMenu() {
  var menuContainer = document.querySelector('.navmenu-container');
  menuContainer.classList.remove('menu-open');
  setTimeout(function() {
    window.location.href = 'mobile.html';
  }, 200); // Adjust the delay as needed for the slide-out animation
}