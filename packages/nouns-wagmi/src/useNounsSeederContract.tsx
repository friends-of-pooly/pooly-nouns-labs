import { useContract } from 'wagmi';
import NounsSeeder from '@nouns/contracts/dist/abi/contracts/NounsSeeder.sol/NounsSeeder.json';

export function useNounsSeederContract(
  address: string,
): any {
  return useContract(
    {
      addressOrName: address,
      contractInterface: NounsSeeder,
    },
  );
}

export default useNounsSeederContract;
