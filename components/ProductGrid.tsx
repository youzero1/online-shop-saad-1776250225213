import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-5xl mb-4">🔍</p>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
        <p className="text-gray-500">Try adjusting your search or filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
