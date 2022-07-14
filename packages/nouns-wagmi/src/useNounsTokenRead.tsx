
import { useContractRead } from 'wagmi';
import NounsToken from '@nouns/contracts/dist/abi/contracts/NounsToken.sol/NounsToken.json';

export function useNounsTokenRead(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractRead(
    {
      addressOrName: address,
      contractInterface: NounsToken,
    },
    method,
    {
      args: args,
    }
  );
}

export default useNounsTokenRead;
 