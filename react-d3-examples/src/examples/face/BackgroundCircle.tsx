type BackgroundCircleProps = {
  radius: number;
  strokeWidth: number;
};

export const BackgroundCircle = ({
  radius,
  strokeWidth,
}: BackgroundCircleProps) => (
  <circle r={radius} fill="yellow" stroke="black" strokeWidth={strokeWidth} />
);
