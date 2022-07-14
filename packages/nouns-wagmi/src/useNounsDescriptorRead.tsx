
import { useContractRead } from 'wagmi';
import NounsDescriptor from '@nouns/contracts/dist/abi/contracts/NounsDescriptor.sol/NounsDescriptor.json';

export function useNounsDescriptorRead(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractRead(
    {
      addressOrName: address,
      contractInterface: NounsDescriptor,
    },
    method,
    {
      args: args,
    }
  );
}

export default useNounsDescriptorRead;
 