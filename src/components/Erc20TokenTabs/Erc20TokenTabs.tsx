import React from "react";
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

interface TabData {
  value: string;
  label: string;
  amountDefaultValue: number;
}

interface TabContentProps {
  tokenType: string;
  amountDefaultValue: number;
}

const TokenTabContent = React.memo(({ tokenType, amountDefaultValue }: TabContentProps) => {
  return (
    <Card className="rounded-lg shadow-md p-4">
      <CardHeader className="text-gray-700 font-semibold py-2 px-4 border-b border-gray-200 rounded-t-lg">
        <CardTitle>Erc20 {tokenType} Token</CardTitle>
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
            className="border focus:border-blue-500 rounded-xl py-2 px-4 block w-full focus:outline-none"
            id={`wallet-${tokenType}`}
            placeholder="0x..."
            defaultValue=""
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="rounded bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition duration-300 ease-in-out">
          Mint
        </Button>
      </CardFooter>
    </Card>
  )
});

export const Erc20TokenTabs: React.FC = () => {
  const tabsData: TabData[] = [
    { value: "x", label: "X", amountDefaultValue: 618 },
    { value: "y", label: "Y", amountDefaultValue: 619 },
    { value: "z", label: "Z", amountDefaultValue: 617 },
  ];

  return (
    <div className="flex justify-center my-8">
      <Tabs defaultValue="x" className="w-full md:w-[600px]">
        <TabsList className="grid w-full grid-cols-3 border-b-2 divide-x divide-gray-300">
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
              tokenType={tab.label}
              amountDefaultValue={tab.amountDefaultValue}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};