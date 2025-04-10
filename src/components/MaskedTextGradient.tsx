export const MaskedTextGradient = ({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 800 200"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          <mask id="text-mask">
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="80"
              fontFamily="sans-serif"
              fontWeight="bold"
              fill="white"
            >
              {label}
            </text>
          </mask>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#grad)"
          mask="url(#text-mask)"
        />
      </svg>
    </div>
  );
};
