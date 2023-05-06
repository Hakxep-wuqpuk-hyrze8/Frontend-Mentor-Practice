import React from 'react';

interface Props {
  src: string;
  alt: string;
};

const SVGImage: React.FC<Props> = ({ src, alt }) => (
  // <object type="image/svg+xml" data={src} aria-label={alt}>
  <img src={src} alt={alt} />
  // </object>
);

export default SVGImage;