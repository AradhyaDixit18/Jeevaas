import { useState } from "react";
import ProductArt from "./ProductArt";

/**
 * Product image. Uses a real photograph when the product has one; otherwise
 * renders the matching branded SVG illustration. If a photo ever fails to load
 * it falls back to the illustration, so a card can never show a broken image.
 */
export default function ProductImage({ product, className = "", index = 0, imgClassName = "" }) {
  const [broken, setBroken] = useState(false);
  const photo = product.photos && product.photos[index];

  if (photo && !broken) {
    return (
      <img
        src={photo}
        alt={product.name}
        loading="lazy"
        decoding="async"
        onError={() => setBroken(true)}
        className={`h-full w-full object-cover ${imgClassName} ${className}`}
      />
    );
  }
  return <ProductArt name={product.art} className={`h-full w-full ${className}`} />;
}
