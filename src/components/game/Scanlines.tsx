const Scanlines = ({ opacity = 0.04 }: { opacity?: number }) => (
  <div
    className="pointer-events-none absolute inset-0 z-[2]"
    style={{
      background: `repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, ${opacity}) 2px,
        rgba(0, 0, 0, ${opacity}) 4px
      )`,
    }}
    aria-hidden
  />
);

export default Scanlines;
