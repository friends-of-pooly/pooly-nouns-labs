import { useContractWrite } from 'wagmi';
import NounsDescriptor from '@nouns/contracts/dist/abi/contracts/NounsDescriptor.sol/NounsDescriptor.json';

export function useNounsDescriptorWrite(
  address: string,
  method: string,
  args: any[]
): any {
  return useContractWrite(
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

export default useNounsDescriptorWrite;
