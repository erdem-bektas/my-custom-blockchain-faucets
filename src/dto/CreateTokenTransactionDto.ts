import { IsNotEmpty, IsString, IsEnum, IsNumber } from 'class-validator';

export class CreateTokenTransactionDto {
    @IsNotEmpty()
    @IsString()
    @IsEnum({ Ethereum: "Ethereum", Polygon: "Polygon", BSC: "BSC" })
    network!: Networks.Ethereum | Networks.Polygon | Networks.BSC

    @IsNotEmpty()
    @IsString()
    wallet!: string;

    @IsNotEmpty()
    @IsNumber()
    amount!: number;

    @IsNotEmpty()
    @IsEnum({ Erc20: "Erc20", Erc721: "Erc721" })
    tokenType!: "Erc20" | "Erc721"

    @IsNotEmpty()
    @IsEnum({ X: "X", Y: "Y" })
    token!: "X" | "Y"

}
