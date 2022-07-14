import { useContract } from 'wagmi';
import NounsDescriptor from '@nouns/contracts/dist/abi/contracts/NounsDescriptor.sol/NounsDescriptor.json';

export function useNounsDescriptorContract(
  address: string,
): any {
  return useContract(
    {
      addressOrName: address,
      contractInterface: NounsDescriptor,
    },
  );
}

export default useNounsDescriptorContract;
