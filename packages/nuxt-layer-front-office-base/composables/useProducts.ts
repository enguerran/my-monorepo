export function useProducts() {
  return useFetch<Product[]>("/api/products");
}
