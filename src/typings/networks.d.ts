declare enum Networks {
  Ethereum = 'ethereum',
  Polygon = 'polygon',
  BSC = 'bsc'
}

declare type NetworkType = keyof typeof Networks;
