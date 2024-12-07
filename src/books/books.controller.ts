import { 
    Body, Controller, Req, Res, 
    Delete, Get, Param, Post, Put, 
    ParseIntPipe, ValidationPipe,
    UseGuards, UseInterceptors, 
} from "@nestjs/common";
import { Request, Response } from "express";

import { BookDto } from "./dto/book.dto";
import { BookGuard } from "./book.guard";
import { BookService } from "./books.service";
import { BookInterceptor } from "./book.interceptor";
import { BookValidationPipe } from "./pipes/book.pipe";

@Controller('books') 
export class BookController{
    constructor(private bookService:BookService) {}

    // add book with custom validation
    @Post('/add')
    addBook(@Req() req:Request, @Res() res:Response, @Body(new BookValidationPipe()) createBook:BookDto) : any {
        return this.bookService.addBook(res, createBook); 
    }

    // update book with default validation
    @Put('/update')
    @UseInterceptors(new BookInterceptor())
    updateBook(@Body(new ValidationPipe()) updateBook:BookDto) : any {
        return this.bookService.updateBook(updateBook);
    }

    @Delete('/delete/:bookId')
    deleteBook(@Req() req: Request,@Res() res:Response, @Param('bookId', ParseIntPipe) bookId:number) : any {
        return this.bookService.deleteBook(res, bookId);
    } 

    // get all books
    @Get('/findAll')
    @UseGuards(new BookGuard())
    getBooks(@Res() res:Response) : any {
        return this.bookService.getBooks(res);
    }

    // get book by id
    @Get('/findOne/:bookId')
    getBookById(@Res() res:Response, @Param('bookId', ParseIntPipe) bookId:number) : any {
        return this.bookService.getBookById(res, bookId);        
    }

}