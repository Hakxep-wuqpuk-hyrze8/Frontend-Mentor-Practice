import React from 'react';

interface Props {
  src: string;
  alt: string;
};

const SVGImage: React.FC<Props> = ({ src, alt }) => (
  <img src={src} alt={alt} />
);

export default SVGImage;