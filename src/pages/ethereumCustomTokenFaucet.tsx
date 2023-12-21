import { FC } from 'react';
import Faucet from "@/components/FaucetComponent";

const ethereumCustomTokenFaucet: FC<{ network: NetworkType }> = ({ network }) => {
  return (
      <Faucet network="Ethereum" />
  );
}

export default ethereumCustomTokenFaucet;
