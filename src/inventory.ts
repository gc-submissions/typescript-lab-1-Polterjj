import { Product } from "./products";

export interface InventoryItem {
  product: Product;
  quantity: number;
}

const InventoryItem: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

export function calcInventoryValue(inventoryArray: InventoryItem[]) {
  if (!inventoryArray.length) return 0;

  let total = 0;
  inventoryArray.forEach(
    (item) => (total += item.product.price * item.quantity)
  );
  return total;
}

const addedTotal = calcInventoryValue(InventoryItem);
console.log(addedTotal);
