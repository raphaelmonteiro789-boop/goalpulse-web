import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProductDetailClient from './ProductDetailClient';
import ProductCard from '../../components/ProductCard';
import { PRODUCTS, getProductBySlug, getRelatedProducts } from '@/lib/products';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <main className="max-w-[1440px] mx-auto px-6 py-12">
      <ProductDetailClient product={product} />

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-black text-white mb-6">Você também pode gostar</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
