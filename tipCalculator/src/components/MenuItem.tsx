import type { MenuItem as MenuItemType } from "../types";


type MenuItemProps = {
  item: MenuItemType;
  addItem: (item: MenuItemType) => void;
};

function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <>
      <button
        className="w-full flex items-center justify-between border-2 border-gray-300 rounded-lg p-4 mb-4 hover:bg-gray-100 transition-colors hover:border-gray-400"
        onClick={() => addItem(item)}
      >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
      </button>
    </>
  );
}

export default MenuItem;