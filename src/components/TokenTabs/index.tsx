import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TokenTabs() {
  return (
    <div className="flex justify-center my-8">
    <Tabs defaultValue="x" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="x">Erc20 X Token</TabsTrigger>
        <TabsTrigger value="y">Erc20 Y Token</TabsTrigger>
        <TabsTrigger value="z">Erc20 Z Token</TabsTrigger>
      </TabsList>
      <TabsContent value="x">
        <Card>
          <CardHeader>
            <CardTitle>Erc20 X Token</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&#39;re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Amount</Label>
              <Input id="name" placeholder="0x..." defaultValue="618" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Wallet</Label>
              <Input id="username" placeholder="0x..." defaultValue="" />
            </div>
          </CardContent>
          <CardFooter>
          <Button className="rounded bg-gradient-to-r from-cyan-500 to-blue-500">Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="y">
        <Card>
          <CardHeader>
            <CardTitle>Erc20 Y Token</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&#39;re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Amount</Label>
              <Input id="name" placeholder="0x..." defaultValue="618" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Wallet</Label>
              <Input id="username" placeholder="0x..." defaultValue="" />
            </div>
          </CardContent>
          <CardFooter>
          <Button className="rounded bg-gradient-to-r from-cyan-500 to-blue-500">Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="z">
        <Card>
          <CardHeader>
            <CardTitle>Erc20 Z Token</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&#39;re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Amount</Label>
              <Input id="name" placeholder="0x..." defaultValue="618" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Wallet</Label>
              <Input id="username" placeholder="0x..." defaultValue="" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="rounded bg-gradient-to-r from-cyan-500 to-blue-500">Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}
