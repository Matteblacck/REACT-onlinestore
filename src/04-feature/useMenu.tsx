import { useState } from "react";

// Типизация элемента меню
export interface MenuItem {
  title: string;
  id: string;
  subItems?: MenuItem[]; // опционально
}

// Типизация массива меню
const menuData: MenuItem[] = [
  {
    title: "MEN",
    id: "men",
    subItems: [
      {
        title: "SHOES",
        id: "shoes",
        subItems: [
          { title: "SNEAKERS", id: "sneakers" },
          { title: "BOOTS", id: "boots" },
          { title: "SLIDES", id: "slides" },
        ],
      },
      {
        title: "OUTWEAR",
        id: "outwear",
        subItems: [
          { title: "JACKETS", id: "jackets" },
          { title: "HOODIES", id: "hoodies" },
          { title: "SWEATERS", id: "sweaters" },
        ],
      },
      {
        title: "PANTS",
        id: "pants",
        subItems: [
          { title: "SHORTS", id: "shorts" },
          { title: "BAGGY", id: "baggy" },
          { title: "FLARED", id: "flared" },
        ],
      },
      {
        title: "ACCESSORIES",
        id: "accessories",
        subItems: [
          { title: "HATS", id: "hats" },
          { title: "BAGS", id: "bags" },
          { title: "SUNGLASSES", id: "sunglasses" },
        ],
      },
    ],
  },
  {
    title: "WOMEN",
    id: "women",
    subItems: [],
  },
  {
    title: "HOME",
    id: "home",
    subItems: [],
  },
];

export const useMenu = () => {
  // Сохраняем стек выбранных элементов (MenuItem)
  const [menuStack, setMenuStack] = useState<MenuItem[]>([]);

  // Текущий уровень меню: если стек пуст, то корневой массив, иначе subItems последнего выбранного элемента
  const currentItems =
    menuStack.length === 0 ? menuData : menuStack[menuStack.length - 1].subItems ?? [];

  // Переход в подменю
  const goToSubMenu = (item: MenuItem) => {
    if (item.subItems && item.subItems.length > 0) {
      setMenuStack((prev) => [...prev, item]);
    }
  };

  // Возврат на уровень выше
  const goBack = () => {
    if (menuStack.length > 0) {
      setMenuStack((prev) => prev.slice(0, -1));
    }
  };
  const resetMenu = () => {
    setMenuStack([])
  }

  // Проверка на корень
  const isRoot = menuStack.length === 0;

  return { currentItems, goToSubMenu, goBack, isRoot, menuStack,resetMenu };
};

export default menuData;