import Image from "next/image";
import type { CSSProperties } from "react";

// Pompom rosa de líder de torcida (imagens em public/images).
// `shape="coracao"` usa o pompom em formato de coração. Com `chain`, vira chaveiro pendurado e balança.
const IMAGES = {
  redondo: { src: "/images/pompom.png", width: 464, height: 414 },
  coracao: { src: "/images/pompom-coracao.png", width: 474, height: 390 },
};

export function Pompom({
  size = "5rem",
  shape = "redondo",
  chain = false,
  className = "",
  style,
}: {
  size?: string;
  shape?: keyof typeof IMAGES;
  chain?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const img = IMAGES[shape];
  return (
    <span
      className={`pompom ${chain ? "pompom--chain" : ""} ${className}`}
      style={{ "--size": size, ...style } as CSSProperties}
      aria-hidden="true"
    >
      {chain && <span className="pompom__chain" />}
      <Image className="pompom__img" src={img.src} alt="" width={img.width} height={img.height} />
    </span>
  );
}
