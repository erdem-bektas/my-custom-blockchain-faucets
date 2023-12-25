import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsNotEmpty, IsString, IsDecimal, IsEnum, IsDate } from 'class-validator';

@Entity()
export default class TokenTransaction {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    userAddress!: string;

    @Column('decimal', { precision: 18, scale: 2 })
    @IsNotEmpty()
    @IsDecimal()
    amount!: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    transactionHash!: string;

    @Column({ default: 'pending' })
    @IsEnum({ pending: 'pending', completed: 'completed', failed: 'failed' })
    status!: 'pending' | 'completed' | 'failed';

    @CreateDateColumn()
    @IsDate()
    createdAt!: Date;

    @UpdateDateColumn()
    @IsDate()
    updatedAt!: Date;
}
