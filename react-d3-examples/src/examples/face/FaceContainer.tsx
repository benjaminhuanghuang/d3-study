type FaceContainerProps = {
  children: React.ReactNode;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
};

export const FaceContainer = ({
  children,
  width,
  height,
  centerX,
  centerY,
}: FaceContainerProps) => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX},${centerY})`}>{children}</g>
  </svg>
);
