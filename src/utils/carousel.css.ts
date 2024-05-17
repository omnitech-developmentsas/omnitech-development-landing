export const generateCarouselCSS = (width: number, bannersLength: number, animationId: any) => {
  return `
    @keyframes scroll-${animationId} {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-${width}px * ${bannersLength}));
      }
    }
  `;
}
