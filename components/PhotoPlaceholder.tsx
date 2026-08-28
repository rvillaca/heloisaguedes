import Image from "next/image";

type Props = { variant?: "hero" | "portrait" | "wide"; src: string; alt: string; priority?: boolean };

export function PhotoPlaceholder({ variant = "portrait", src, alt, priority = false }: Props) {
  return (
    <div className={`photoPlaceholder photo-${variant}`}>
      <Image src={src} alt={alt} fill sizes={variant === "hero" ? "(max-width: 950px) 100vw, 42vw" : "(max-width: 950px) 100vw, 40vw"} priority={priority} />
    </div>
  );
}
