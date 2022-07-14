import { useContractWrite } from 'wagmi';
import NounsSeeder from '@nouns/contracts/dist/abi/contracts/NounsSeeder.sol/NounsSeeder.json';

export function useNounsSeederWrite(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractWrite(
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

export default useNounsSeederWrite;
