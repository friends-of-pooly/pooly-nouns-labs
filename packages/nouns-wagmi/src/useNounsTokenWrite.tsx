import { useContractWrite } from 'wagmi';
import NounsToken from '@nouns/contracts/dist/abi/contracts/NounsToken.sol/NounsToken.json';

export function useNounsTokenWrite(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractWrite(
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

export default useNounsTokenWrite;
