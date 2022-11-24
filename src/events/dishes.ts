import { menuButtons } from '../lib/elements';
import type { Menu } from '../lib/types/menu';

let currentMenu: Menu = 'breakfast';

highlightMenuButton(currentMenu);

menuButtons.forEach((menuButton) => {
  const menuId = menuButton.id as Menu;
  menuButton.addEventListener('click', handleChangeMenu(menuId));
});

function handleChangeMenu(menuId: Menu) {
  return (): void => {
    if (currentMenu === menuId) return;
    highlightMenuButton(menuId);
    currentMenu = menuId;
  };
}

function highlightMenuButton(menuId: Menu): void {
  menuButtons.forEach((menuButton) => {
    const menuButtonId = menuButton.id as Menu;
    if (menuButtonId === menuId) menuButton.classList.add('active');
    else menuButton.classList.remove('active');
  });
}
