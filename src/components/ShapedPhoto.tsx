import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { Sun, Cloud, Leaf } from "./decor/Decor";

type ShapedPhotoProps = {
  src: string | null;
  alt: string;
  shapeClass: string;
  className?: string;
  sizes: string;
  priority?: boolean;
  placeholderLabel?: string;
  imageClassName?: string;
};

/**
 * Пішінді фото. Сурет болмаса — бұзылған сурет орнына әдемі декоративті алмастырғыш көрсетіледі.
 */
export default function ShapedPhoto({
  src,
  alt,
  shapeClass,
  className = "",
  sizes,
  priority = false,
  placeholderLabel,
  imageClassName = "",
}: ShapedPhotoProps) {
  return (
    <div className={`relative overflow-hidden ${shapeClass} ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${imageClassName}`} />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-gold-light/70 via-cream to-leaf-light/60"
        >
          <Sun className="absolute top-[14%] right-[18%] h-14 w-14 animate-spin-slow" />
          <Cloud className="absolute top-[26%] left-[12%] h-9 w-16 animate-float" />
          <Leaf className="absolute bottom-[16%] left-[22%] h-8 w-8 animate-sway" />
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-leaf shadow-sm">
            <ImageIcon className="h-7 w-7" aria-hidden />
          </span>
          {placeholderLabel && (
            <span className="max-w-[70%] text-center text-sm font-semibold text-leaf-dark/80">{placeholderLabel}</span>
          )}
        </div>
      )}
    </div>
  );
}
