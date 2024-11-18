export default defineNuxtPlugin(() => ({
  provide: {
    price: (price: Price) => `${price.currency} ${price.amount}`,
  },
}));
