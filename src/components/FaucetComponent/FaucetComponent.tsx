import { FC, useMemo } from 'react';
import Erc20TokenTab from '@/components/Erc20TokenTabs';
import Erc721TokenTab from '@/components/Erc721TokenTabs';

const FaucetComponent: FC<{ network: NetworkType }> = ({ network }) => {
    const networkName = useMemo(() => network.toUpperCase(), [network]);

    return (
        <div className="container">
            <h2 className='pt-4'>{networkName} Network Custom Token Faucet</h2>
            <Erc20TokenTab />
            <Erc721TokenTab />
        </div>
    );
};

export default FaucetComponent;
