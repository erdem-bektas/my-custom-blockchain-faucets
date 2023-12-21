// components/Faucet/FaucetComponent/FaucetComponent.tsx
import { FC, useMemo } from 'react';
import Erc20TokenTabs from '@/components/Erc20TokenTabs';
import Erc721TokenTabs from '@/components/Erc721TokenTabs';

const FaucetComponent: FC<{ network: NetworkType }> = ({ network }) => {
    const networkName = useMemo(() => network.toUpperCase(), [network]);

    return (
        <div className="container">
            <h2 className='pt-4'>{networkName} Network Custom Token Faucet</h2>
            <Erc20TokenTabs />
            <Erc721TokenTabs />
        </div>
    );
};

export default FaucetComponent;
