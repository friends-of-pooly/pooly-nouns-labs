
import { useContractRead } from 'wagmi';
import NounsSeeder from '@nouns/contracts/dist/abi/contracts/NounsSeeder.sol/NounsSeeder.json';

export function useNounsSeederRead(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractRead(
    {
      addressOrName: address,
      contractInterface: NounsSeeder,
    },
    method,
    {
      args: args,
    }
  );
}

export default useNounsSeederRead;
 