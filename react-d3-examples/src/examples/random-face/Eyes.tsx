type EyesProps = {
  eyeOffsetX: number;
  eyeOffsetY: number;
  eyeRadius: number;
};

export const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRadius }: EyesProps) => (
  <>
    <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
    <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
  </>
);
