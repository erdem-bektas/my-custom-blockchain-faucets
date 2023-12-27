import React, { FC, useState } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ITokenData } from "@/utils/ITokenData";
import { sendTokenData } from "@/utils/api";

interface TabData {
  value: string;
  label: string;
  amountDefaultValue: number;
}

interface TabContentProps {
  tokenType: string;
  amountDefaultValue: number;
  network: string;
}

const TokenTabContent = React.memo(({ tokenType, amountDefaultValue, network }: TabContentProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState<number>(amountDefaultValue);
  const [wallet, setWallet] = useState<string>('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleWalletChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWallet(e.target.value);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    const data: ITokenData = {
      network: network,
      wallet: wallet,
      amount: amount,
      tokenType: "Erc20",
      token: 'X',
    };
    sendTokenData(data).then(() => setIsLoading(false)).catch(() => setIsLoading(true));
  };

  if (isLoading) {
    //TODO: loading animation / success or error information maybe modal 
    return <div>Loading...</div>;
  }
  return (
    <Card className="rounded-lg shadow-md p-4">
      <CardHeader className="text-gray-700 font-semibold py-2 px-4 border-b border-gray-200 rounded-t-lg">
        <CardTitle>{tokenType} Token</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 p-4">
        <div className="space-y-2">
          <Label htmlFor={`amount-${tokenType}`} className="font-semibold">
            Amount
          </Label>
          <Input
            onChange={handleAmountChange}
            className="border focus:border-blue-500 rounded-xl py-2 px-4 block w-full focus:outline-none"
            id={`amount-${tokenType}`}
            placeholder="0x..."
            defaultValue={amountDefaultValue}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`wallet-${tokenType}`} className="font-semibold">
            Wallet
          </Label>
          <Input
            onChange={handleWalletChange}
            className="border focus:border-blue-500 rounded-xl py-2 px-4 block w-full focus:outline-none"
            id={`wallet-${tokenType}`}
            placeholder="0x..."
            defaultValue=""
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="rounded bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition duration-300 ease-in-out"
          onClick={handleSubmit}
        >
          Mint
        </Button>
      </CardFooter>
    </Card>
  )
});

const Erc20TokenTabs: FC<{ network: NetworkType }> = ({ network }) => {
  const tabsData: TabData[] = [
    { value: "x", label: "X", amountDefaultValue: 618 },
    { value: "y", label: "Y", amountDefaultValue: 619 },
  ];

  return (
    <div className="flex justify-center my-8">
      <Tabs defaultValue="x" className="w-full md:w-[600px]">
        <TabsList className="grid w-full grid-cols-2 border-b-2 divide-x divide-gray-300">
          {tabsData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={clsx(
                "transition duration-300 ease-in-out",
                "hover:border-blue-500 hover:shadow-md hover:bg-gray-100",
                "tab-active:bg-blue-100 tab-active:shadow-lg tab-active:border-blue-600"
              )}
            >
              {tab.label} Token
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsData.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <TokenTabContent
              network={network}
              tokenType={tab.label}
              amountDefaultValue={tab.amountDefaultValue}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Erc20TokenTabs; 