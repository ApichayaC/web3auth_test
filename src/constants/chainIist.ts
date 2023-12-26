type ChainInfo = {
  chainId: string;
  rpcUrls: string[];
  chainName: string;
  iconPath: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  blockExplorerUrls: string[];
};

export const CHAINS: Record<string, ChainInfo> = {
  "0xa869": {
    chainId: "0xa869",
    rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
    chainName: "Avalanche Fuji Testnet",
    iconPath: "/chain/icon-avax.png",
    nativeCurrency: {
      name: "Avalanche Fuji Testnet",
      symbol: "AVAX",
      decimals: 18,
    },
    blockExplorerUrls: ["https://testnet.snowtrace.io"],
  },
  "0x13881": {
    chainId: "0x13881",
    rpcUrls: ["https://endpoints.omniatech.io/v1/matic/mumbai/public"],
    chainName: "Mumbai",
    iconPath: "/chain/polygon.png",
    nativeCurrency: {
      name: "Mumbai",
      symbol: "MATIC",
      decimals: 18,
    },
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },

  "0x5": {
    chainId: "0x5",
    rpcUrls: ["https://eth-goerli.api.onfinality.io/public"],
    chainName: "Goerli",
    iconPath: "/chain/goerli.png",
    nativeCurrency: {
      name: "Goerli",
      symbol: "ETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://goerli.etherscan.io/"],
  },
};
