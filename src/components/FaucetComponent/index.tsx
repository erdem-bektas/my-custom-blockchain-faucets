import { FC } from 'react';
import FaucetComponent from './FaucetComponent';

const Faucet: FC<{ network: NetworkType }> = ({ network }) => {
    return <FaucetComponent network={network} />;
}

export default Faucet;
