export interface InventoryItem {
  name: string;
  priceInCents: number;
  productID: string;
}

export const inventory: InventoryItem[] = [
  { name: "Apple", priceInCents: 199, productID: "a1582" },
  { name: "Loaf of Bread", priceInCents: 150, productID: "b2693" },
  { name: "Milk", priceInCents: 250, productID: "m3704" },
];

export const createDollarString = (priceInCents: number) => {
  const formatting_options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  };
  const dollarFormatter = new Intl.NumberFormat("en-US", formatting_options);
  const dollarString = dollarFormatter.format(priceInCents / 100);
  return dollarString;
};
