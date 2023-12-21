import Erc20TokenTabs from "@/components/Erc20TokenTabs";
import Erc721TokenTabs from "@/components/Erc721TokenTabs";

export default function PolygonCustomFaucet() {
  return (
    <>
      <div className="container">
        <Erc20TokenTabs />
        <Erc721TokenTabs />
      </div>
    </>
  );
}

