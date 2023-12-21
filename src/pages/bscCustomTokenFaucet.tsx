import { FC } from 'react';
import Faucet from "@/components/FaucetComponent";

const bscCustomTokenFaucet: FC<{ network: NetworkType }> = ({ network }) => {
  return (
      <Faucet network="BSC" />
  );
}

export default bscCustomTokenFaucet;
