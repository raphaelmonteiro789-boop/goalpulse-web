import type { Brand } from '@/lib/products';

interface ShoeGlyphProps {
  color: string;
  brand: Brand;
  className?: string;
}

const markColor: Record<Brand, string> = {
  nike: '#ffffff',
  adidas: '#ffffff',
  puma: '#111111',
};

export default function ShoeGlyph({ color, brand, className }: ShoeGlyphProps) {
  const isLight = ['#F5F5F1', '#FAFAFA', '#F2F2F2', '#FFD700', '#FFD400'].includes(color);
  const mark = isLight ? '#111111' : markColor[brand];
  const outline = isLight ? '#111111' : 'rgba(255,255,255,0.25)';

  return (
    <svg viewBox="0 0 240 130" className={className} role="img" aria-label={`Tênis ${brand}`}>
      <path
        d="M14 108
           C 14 92, 26 84, 40 80
           L 70 70
           C 88 64, 96 48, 118 42
           C 140 36, 158 40, 172 50
           L 196 68
           C 214 78, 226 82, 228 96
           C 229 104, 224 110, 214 110
           L 24 110
           C 18 110, 14 114, 14 108 Z"
        fill={color}
        stroke={outline}
        strokeWidth="2"
      />
      <path
        d="M40 80 L70 70 C88 64, 96 48, 118 42"
        fill="none"
        stroke={outline}
        strokeWidth="2"
      />
      <rect x="24" y="102" width="196" height="8" rx="4" fill="#1a1a1a" opacity="0.85" />

      {brand === 'nike' && (
        <path
          d="M56 92 C 90 78, 130 68, 190 56 C 150 82, 108 96, 66 100 Z"
          fill={mark}
        />
      )}

      {brand === 'adidas' && (
        <g stroke={mark} strokeWidth="7" strokeLinecap="round">
          <path d="M60 96 L108 58" />
          <path d="M78 100 L126 62" />
          <path d="M96 104 L144 66" />
        </g>
      )}

      {brand === 'puma' && (
        <path
          d="M64 94 C 92 96, 100 78, 126 70 C 142 65, 150 74, 168 68"
          fill="none"
          stroke={mark}
          strokeWidth="6"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
