import React from "react";
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

interface TabData {
  value: string;
  label: string;
}

interface TabContentProps {
  tokenType: string;
  nftId: string;
  walletId: string;
}

const TabContent: React.FC<TabContentProps> = ({
  tokenType,
  nftId,
  walletId,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>Erc721 {tokenType} (NFT)</CardTitle>
      <CardDescription>
        Make changes to your account here. Click save when you're done.
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-2">
      <div className="space-y-1">
        <Label htmlFor={nftId}>NFT ID</Label>
        <Input id={nftId} placeholder="123" />
      </div>
      <div className="space-y-1">
        <Label htmlFor={walletId}>Wallet</Label>
        <Input id={walletId} placeholder="0x..." />
      </div>
    </CardContent>
    <CardFooter>
      <Button className="rounded bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition duration-300 ease-in-out">
        <span className="mx-4">Send</span>
      </Button>
    </CardFooter>
  </Card>
);

const Erc721TokenTabs: React.FC = () => {
  const tabsData: TabData[] = [
    { value: "x", label: "X Token" },
    { value: "y", label: "Y Token" },
    { value: "z", label: "Z Token" },
  ];

  return (
    <div className="flex justify-center my-8">
      <Tabs defaultValue="x" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          {tabsData.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsData.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <TabContent
              tokenType={tab.label}
              nftId={`${tab.value}NftId`}
              walletId={`${tab.value}Wallet`}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Erc721TokenTabs;
