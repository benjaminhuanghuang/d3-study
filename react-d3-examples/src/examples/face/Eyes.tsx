
export const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRadius }:{
  eyeOffsetX: number;
  eyeOffsetY: number;
  eyeRadius: number;
}) => (
  <>
    <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
    <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
  </>
);
