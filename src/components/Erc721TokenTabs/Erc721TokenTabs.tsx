import React, { useState } from "react";
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
}

interface TabContentProps {
  tokenType: string;
  nftId: string;
  wallet: string;
}

const TabContent = React.memo(({ tokenType, nftId, wallet }: TabContentProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputNftId, setInputNftId] = useState<string>('');
  const [inputWallet, setInputwallet] = useState<string>('');

  const handleNftIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNftId(e.target.value);
  };

  const handleWalletChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputwallet(e.target.value);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    const data: ITokenData = {
      type: 'Erc721',
      tokenType,
      nftId: inputNftId,
      wallet: inputWallet,
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
        <CardTitle>Erc721 {tokenType} (NFT)</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 p-4">
        <div className="space-y-2">
          <Label htmlFor={nftId}>NFT ID</Label>
          <Input
            onChange={handleNftIdChange}
            className="border focus:border-blue-500 rounded-xl py-2 px-4 block w-full focus:outline-none"
            id={nftId}
            placeholder="123"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor={wallet}>Wallet</Label>
          <Input
            onChange={handleWalletChange}
            className="border focus:border-blue-500 rounded-xl py-2 px-4 block w-full focus:outline-none"
            id={wallet}
            placeholder="0x..."
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="rounded bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition duration-300 ease-in-out"
          onClick={handleSubmit}
        >
          <span className="mx-4">Send</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
);

const Erc721TokenTabs: React.FC = () => {
  const tabsData: TabData[] = [
    { value: "x", label: "X Token" },
    { value: "y", label: "Y Token" },
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
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsData.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <TabContent
              tokenType={tab.label}
              nftId={`${tab.value}NftId`}
              wallet={`${tab.value}Wallet`}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Erc721TokenTabs;
