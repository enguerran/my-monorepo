export default defineEventHandler(async (event): Promise<Product[]> => {
  return [
    {
      name: "product 1",
      price: {
        amount: 12.34,
        currency: "USD",
      },
      description: "This is product 1",
      image: "https://picsum.photos/200",
      id: "1",
    },
    {
      name: "product 2",
      price: {
        amount: 56.78,
        currency: "USD",
      },
      description: "This is product 2",
      image: "https://picsum.photos/200",
      id: "2",
    },
    {
      name: "product 3",
      price: {
        amount: 90.12,
        currency: "USD",
      },
      description: "This is product 3",
      image: "https://picsum.photos/200",
      id: "3",
    },
    {
      name: "product 4",
      price: {
        amount: 34.56,
        currency: "USD",
      },
      description: "This is product 4",
      image: "https://picsum.photos/200",
      id: "4",
    },
    {
      name: "product 5",
      price: {
        amount: 78.9,
        currency: "USD",
      },
      description: "This is product 5",
      image: "https://picsum.photos/200",
      id: "5",
    },
    {
      name: "product 6",
      price: {
        amount: 12.34,
        currency: "USD",
      },
      description: "This is product 6",
      image: "https://picsum.photos/200",
      id: "6",
    },
    {
      name: "product 7",
      price: {
        amount: 56.78,
        currency: "USD",
      },
      description: "This is product 7",
      image: "https://picsum.photos/200",
      id: "7",
    },
    {
      name: "product 8",
      price: {
        amount: 90.12,
        currency: "USD",
      },
      description: "This is product 8",
      image: "https://picsum.photos/200",
      id: "8",
    },
    {
      name: "product 9",
      price: {
        amount: 34.56,
        currency: "USD",
      },
      description: "This is product 9",
      image: "https://picsum.photos/200",
      id: "9",
    },
    {
      name: "product 10",
      price: {
        amount: 78.9,
        currency: "USD",
      },
      description: "This is product 10",
      image: "https://picsum.photos/200",
      id: "10",
    },
  ];
});
