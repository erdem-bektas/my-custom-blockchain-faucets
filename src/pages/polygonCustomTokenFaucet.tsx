import { FC } from 'react';
import Faucet from "@/components/FaucetComponent";

const polygonCustomTokenFaucet: FC<{ network: NetworkType }> = ({ network }) => {
  return (
      <Faucet network="Polygon" />
  );
}

export default polygonCustomTokenFaucet;
