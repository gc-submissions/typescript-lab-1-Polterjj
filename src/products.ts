export interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "table", price: 200 },
  { name: "chair", price: 40 },
  { name: "book", price: 20 },
];

export const calcAverageProductPrice = (array: Product[]): number => {
  if (array) {
    let sum: number = array
      .map((item) => item.price)
      .reduce((prev, curr) => prev + curr);
    let avgPrice = sum / array.length;
    return avgPrice;
  } else {
    return 0;
  }
};

const average = calcAverageProductPrice(products);
console.log(average);
