import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <section className="mx-auto bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 py-32 text-neutral-500 shadow-sm dark:from-indigo-700 dark:via-indigo-800 dark:to-indigo-900 dark:text-white text-white">
        <div className="container max-w-screen-md mx-auto grid grid-cols-12 gap-x-10">
          <div className="col-span-6 p-10">
            <img src="/poolynoun.png" className="w-full" />
          </div>
          <div className="col-span-6 flex items-center">
            <div className="">
              <h3 className="font-normal text-6xl">Poolyish #0</h3>
              <span className="">How minting Poolyish works?</span>
              <p className="">
                The Poolyish NFT support DeFi Defenders. The DFD Guild aids in
                raising awareness and sharing imporant decentralized finance
                legislation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container max-w-screen-md mx-auto grid grid-cols-12 gap-x-10 py-20">
          <div className="col-span-6 flex items-center">
            <div className="">
              <h3 className="font-normal text-3xl">A Community Owned PFP</h3>
              <h4 className="font-bold text-lg">
                The Friends of Pooly Flock Together
              </h4>
              <hr className="my-3" />
              <p className="">
                At the start of each FoP campaign the community managed PFP is
                updated directly on the Ethereum blockchain.
              </p>
            </div>
          </div>
          <div className="col-span-6">
            <img src="/poolypfp.png" className="w-full" />
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
