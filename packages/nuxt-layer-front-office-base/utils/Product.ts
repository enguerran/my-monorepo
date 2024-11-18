export interface Product {
  name: string;
  image: string;
  price: Price;
  id: string;
  description: string;
}

export interface Price {
  amount: number;
  currency: "EUR" | "USD";
}
