/**
 * Breakpoints are the points at which the website content adjusts to the device width, 
 * allowing you to present the best possible layout to the user. In the given code, I have used 
 * max-width if you like you can change it to min-width and play with breakpoints values as per your need.
 */

const size = {
  sm: '375px', // mobile screen
  lg: '1440px'  // desktop
}

export const device = {
  sm: `(max-width: ${size.sm})`,
  lg: `(max-width: ${size.lg})`,
}

// xs: '400px', // for small screen mobile
// sm: '600px', // for mobile screen
// md: '900px', // for tablets
// lg: '1280px', // for laptops
// xl: '1440px', // for desktop / monitors
// xxl: '1920px', // for big screens