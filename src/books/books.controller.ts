import { 
    BadRequestException,
    Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req, Res, 
    ValidationPipe
} from "@nestjs/common";
import { Request, Response } from "express";

import { BookDto } from "./dto/book.dto";
import { BookService } from "./books.service";
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
    updateBook(@Req() req:Request, @Res() res:Response, @Body(new ValidationPipe()) updateBook:BookDto) : string {
        return this.bookService.updateBook(res, updateBook);
    }

    @Delete('/delete/:bookId')
    deleteBook(@Req() req: Request,@Res() res:Response, @Param('bookId', ParseIntPipe) bookId:number) : string {
        return this.bookService.deleteBook(res, bookId);
    } 

    // get all books
    @Get('/finds')
    getBooks(@Res() res:Response) : any {
        return this.bookService.getBooks(res);
    }

    // get book by id
    @Get('/finds/:bookId')
    getBookById(@Res() res:Response, @Param('bookId', ParseIntPipe) bookId:number) : any {
        return this.bookService.getBookById(res, bookId);        
    }

}