export type Brand = 'nike' | 'adidas' | 'puma';
export type Category = 'chuteira' | 'tenis';

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: Brand;
  category: Category;
  price: number;
  originalPrice?: number;
  color: string;
  colorName: string;
  tag?: string;
  description: string;
}

export const BRANDS: Record<Brand, { name: string; accent: string; dark: string; light: string; tagline: string }> = {
  nike: {
    name: 'Nike',
    accent: '#E1261C',
    dark: '#0D0D0D',
    light: '#F5F5F1',
    tagline: 'Just Do It.',
  },
  adidas: {
    name: 'Adidas',
    accent: '#0033A0',
    dark: '#111111',
    light: '#FAFAFA',
    tagline: 'Impossible Is Nothing.',
  },
  puma: {
    name: 'Puma',
    accent: '#FFD400',
    dark: '#0A0A0A',
    light: '#F2F2F2',
    tagline: 'Forever Faster.',
  },
};

export const PRODUCTS: Product[] = [
  // Nike
  {
    id: 'n1', slug: 'nike-strike-elite', name: 'Nike Strike Elite', brand: 'nike', category: 'chuteira',
    price: 899, originalPrice: 1099, color: '#E1261C', colorName: 'Vermelho Fúria', tag: 'Mais vendido',
    description: 'Chuteira de trava firme com cravos de precisão para explosão de velocidade em campo.',
  },
  {
    id: 'n2', slug: 'nike-phantom-shadow', name: 'Nike Phantom Shadow', brand: 'nike', category: 'chuteira',
    price: 749, color: '#0D0D0D', colorName: 'Preto Total',
    description: 'Toque preciso e controle absoluto na hora de finalizar.',
  },
  {
    id: 'n3', slug: 'nike-vapor-glide', name: 'Nike Vapor Glide', brand: 'nike', category: 'chuteira',
    price: 999, color: '#FFD700', colorName: 'Ouro Volt', tag: 'Novo',
    description: 'Construção ultraleve pensada para atacantes que decidem partidas.',
  },
  {
    id: 'n4', slug: 'nike-air-pulse', name: 'Nike Air Pulse', brand: 'nike', category: 'tenis',
    price: 649, color: '#F5F5F1', colorName: 'Branco Puro',
    description: 'Amortecimento em cápsula de ar para o dia a dia com estilo urbano.',
  },
  {
    id: 'n5', slug: 'nike-react-storm', name: 'Nike React Storm', brand: 'nike', category: 'tenis',
    price: 719, originalPrice: 849, color: '#111111', colorName: 'Grafite',
    description: 'Espuma reativa que devolve energia a cada passada.',
  },
  {
    id: 'n6', slug: 'nike-zoom-flash', name: 'Nike Zoom Flash', brand: 'nike', category: 'tenis',
    price: 799, color: '#E1261C', colorName: 'Vermelho Fúria', tag: 'Novo',
    description: 'Unidade Zoom para resposta imediata em corridas curtas.',
  },

  // Adidas
  {
    id: 'a1', slug: 'adidas-predator-storm', name: 'Adidas Predator Storm', brand: 'adidas', category: 'chuteira',
    price: 949, color: '#0033A0', colorName: 'Azul Profundo', tag: 'Mais vendido',
    description: 'Superfície texturizada para efeito e precisão no passe.',
  },
  {
    id: 'a2', slug: 'adidas-copa-classic', name: 'Adidas Copa Classic', brand: 'adidas', category: 'chuteira',
    price: 699, color: '#111111', colorName: 'Preto Clássico',
    description: 'Couro premium com o toque tradicional que nunca sai de moda.',
  },
  {
    id: 'a3', slug: 'adidas-x-ghosted', name: 'Adidas X Ghosted', brand: 'adidas', category: 'chuteira',
    price: 899, color: '#FAFAFA', colorName: 'Branco Gelo', tag: 'Novo',
    description: 'Velocidade pura para dominar as pontas do campo.',
  },
  {
    id: 'a4', slug: 'adidas-ultraboost-city', name: 'Adidas Ultraboost City', brand: 'adidas', category: 'tenis',
    price: 899, color: '#0033A0', colorName: 'Azul Profundo',
    description: 'Retorno de energia em cada passo, feito para longas caminhadas.',
  },
  {
    id: 'a5', slug: 'adidas-stripe-runner', name: 'Adidas Stripe Runner', brand: 'adidas', category: 'tenis',
    price: 649, originalPrice: 749, color: '#FAFAFA', colorName: 'Branco Gelo', tag: 'Novo',
    description: 'As três listras icônicas em um design minimalista de corrida.',
  },
  {
    id: 'a6', slug: 'adidas-superstar-bold', name: 'Adidas Superstar Bold', brand: 'adidas', category: 'tenis',
    price: 599, color: '#111111', colorName: 'Preto Clássico',
    description: 'O clássico atemporal com toque de shell reforçado.',
  },

  // Puma
  {
    id: 'p1', slug: 'puma-future-cat', name: 'Puma Future Cat', brand: 'puma', category: 'chuteira',
    price: 799, color: '#FFD400', colorName: 'Amarelo Elétrico', tag: 'Mais vendido',
    description: 'Encaixe adaptável para arrancadas felinas e mudanças de direção.',
  },
  {
    id: 'p2', slug: 'puma-ultra-sprint', name: 'Puma Ultra Sprint', brand: 'puma', category: 'chuteira',
    price: 749, color: '#0A0A0A', colorName: 'Preto Noturno',
    description: 'Base de tração agressiva feita para o ritmo mais veloz do jogo.',
  },
  {
    id: 'p3', slug: 'puma-king-legacy', name: 'Puma King Legacy', brand: 'puma', category: 'chuteira',
    price: 679, color: '#F2F2F2', colorName: 'Branco Gelo', tag: 'Novo',
    description: 'Herança clássica em couro macio para quem manda no drible.',
  },
  {
    id: 'p4', slug: 'puma-velocity-nitro', name: 'Puma Velocity Nitro', brand: 'puma', category: 'tenis',
    price: 599, color: '#FFD400', colorName: 'Amarelo Elétrico', tag: 'Novo',
    description: 'Espuma NITRO ultraleve para treinos que exigem velocidade.',
  },
  {
    id: 'p5', slug: 'puma-suede-classic', name: 'Puma Suede Classic', brand: 'puma', category: 'tenis',
    price: 449, color: '#0A0A0A', colorName: 'Preto Noturno',
    description: 'O ícone de camurça que atravessa gerações de estilo de rua.',
  },
  {
    id: 'p6', slug: 'puma-rider-flow', name: 'Puma Rider Flow', brand: 'puma', category: 'tenis',
    price: 529, originalPrice: 629, color: '#F2F2F2', colorName: 'Branco Gelo',
    description: 'Silhueta retrô com conforto de espuma dupla camada.',
  },
];

export function getProductsByBrand(brand: Brand) {
  return PRODUCTS.filter((p) => p.brand === brand);
}

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return PRODUCTS.filter((p) => p.brand === product.brand && p.id !== product.id).slice(0, limit);
}
