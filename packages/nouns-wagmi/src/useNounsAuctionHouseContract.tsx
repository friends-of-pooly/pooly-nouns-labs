import { useContract } from 'wagmi';
import NounsAuctionHouse from '@nouns/contracts/dist/abi/contracts/NounsAuctionHouse.sol/NounsAuctionHouse.json';

export function useNounsAuctionHouseContract(
  address: string,
): any {
  return useContract(
    {
      addressOrName: address,
      contractInterface: NounsAuctionHouse,
    },
  );
}

export default useNounsAuctionHouseContract;
