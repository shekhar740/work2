import Lottie from "lottie-react";

interface LottiAnimationProps {
  data: object;
  loop?: true;
  width?: string;
  height?: string;
}

export const LottiAnimation = ({
  data,
  loop,
  width,
  height,
}: LottiAnimationProps) => (
  <Lottie animationData={data} loop={loop} width={width} height={height} />
);
