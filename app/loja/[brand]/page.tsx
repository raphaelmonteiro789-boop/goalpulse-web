import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import NikeSection from '../components/brands/NikeSection';
import AdidasSection from '../components/brands/AdidasSection';
import PumaSection from '../components/brands/PumaSection';
import ProductGrid from '../components/ProductGrid';
import { BRANDS, type Brand } from '@/lib/products';

const VALID_BRANDS: Brand[] = ['nike', 'adidas', 'puma'];

const SECTION_BY_BRAND: Record<Brand, React.ComponentType> = {
  nike: NikeSection,
  adidas: AdidasSection,
  puma: PumaSection,
};

function isBrand(value: string): value is Brand {
  return (VALID_BRANDS as string[]).includes(value);
}

export function generateStaticParams() {
  return VALID_BRANDS.map((brand) => ({ brand }));
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const { brand } = await params;
  if (!isBrand(brand)) return {};
  return {
    title: `${BRANDS[brand].name} — Chuteiras e Tênis`,
    description: `Coleção ${BRANDS[brand].name}: ${BRANDS[brand].tagline}`,
  };
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  if (!isBrand(brand)) notFound();

  const Section = SECTION_BY_BRAND[brand];

  return (
    <main>
      <Section />
      <ProductGrid brand={brand} title={`Coleção ${BRANDS[brand].name}`} />
    </main>
  );
}
