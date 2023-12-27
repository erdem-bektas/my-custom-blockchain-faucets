import { IsNotEmpty, IsString, IsDecimal, IsEnum } from 'class-validator';

export class CreateTokenTransactionDto {
    @IsNotEmpty()
    @IsString()
    userAddress!: string;

    @IsNotEmpty()
    @IsDecimal()
    amount!: number;

    @IsNotEmpty()
    @IsString()
    @IsEnum({ Ethereum: "Ethereum", Polygon: "Polygon", BSC: "BSC" })
    network!: Networks.Ethereum | Networks.Polygon | Networks.BSC

}
