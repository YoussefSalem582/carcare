type BrandLogoProps = {
  alt?: string;
  className?: string;
};

/** CarCare mark from `public/logo.png` (respects Vite `base` for GitHub Pages). */
export function BrandLogo({ alt = 'CarCare', className }: BrandLogoProps) {
  return <img src={`${import.meta.env.BASE_URL}logo.png`} alt={alt} className={className} decoding="async" />;
}
