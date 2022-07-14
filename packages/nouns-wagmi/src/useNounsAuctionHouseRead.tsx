import { useContractWrite } from 'wagmi';
import NounsAuctionHouse from '@nouns/contracts/dist/abi/contracts/NounsAuctionHouse.sol/NounsAuctionHouse.json';

export function useNounsAuctionHouseRead(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractWrite(
    {
      addressOrName: address,
      contractInterface: NounsAuctionHouse,
    },
    method,
    {
      args: args,
    }
  );
}

export default useNounsAuctionHouseRead;
