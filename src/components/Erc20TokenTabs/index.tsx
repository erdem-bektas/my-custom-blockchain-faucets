import { FC } from 'react';
import Erc20TokenTabs from './Erc20TokenTabs';

const Erc20TokenTab: FC<{ network: NetworkType }> = ({ network }) => {
  return (
    <Erc20TokenTabs network={network} />
  );
}

export default Erc20TokenTab;
