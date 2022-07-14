import { useContract } from 'wagmi';
import NounsToken from '@nouns/contracts/dist/abi/contracts/NounsToken.sol/NounsToken.json';

export function useNounsTokenContract(
  address: string,
): any {
  return useContract(
    {
      addressOrName: address,
      contractInterface: NounsToken,
    },
  );
}

export default useNounsTokenContract;
