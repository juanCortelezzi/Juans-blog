import NextImage from "next/image";

type ImageProps = {
  src: string;
  alt: string;
};

export const Image = ({ src, alt }: ImageProps) => (
  <div className="relative h-64 sm:h-80 md:h-96">
    <NextImage src={src} alt={alt} layout="fill" objectFit="contain" />
  </div>
);
