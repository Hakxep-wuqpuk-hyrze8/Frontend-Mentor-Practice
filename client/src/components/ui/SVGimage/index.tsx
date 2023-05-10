import React from 'react';
import styled from 'styled-components';


const SVGImage = ({ ...props }) => (
  // <object type="image/svg+xml" data={src} aria-label={alt}>
  <img {...props} />
  // </object>
);

export default SVGImage;

