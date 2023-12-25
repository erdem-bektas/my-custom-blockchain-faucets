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
    transactionHash!: string;

    @IsNotEmpty()
    @IsEnum({ pending: 'pending', failed: 'failed' })
    status!: 'pending' | 'failed';
}
