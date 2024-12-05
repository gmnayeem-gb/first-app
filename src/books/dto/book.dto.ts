import { IsString, IsInt } from 'class-validator';

export class BookDto {
    @IsInt()
    id: number;

    @IsString()
    title: string;

    @IsString()
    description: string;
}