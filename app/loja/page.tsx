import Hero3D from './components/Hero3D';
import BrandTeaserGrid from './components/BrandTeaserGrid';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';

export default function LojaPage() {
  return (
    <main>
      <Hero3D />
      <BrandTeaserGrid />
      <ProductGrid title="Catálogo completo" />
      <Newsletter />
    </main>
  );
}
