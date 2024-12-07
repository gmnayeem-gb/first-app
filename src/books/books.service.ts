import { Response } from "express";
import { Injectable } from "@nestjs/common";

import { BookDto } from "./dto/book.dto";

@Injectable()
export class BookService {
    addBook(res:Response, createBook:BookDto):any {
        return res.status(201).json({
            success:true,
            message: "Book created Successfully!",
            data: createBook
        })
    }

    updateBook(updateBook:BookDto) :any {
        return {
            success:true,
            message: "Book updated Successfully!",
            data: updateBook
        }
    }

    deleteBook(res:Response, id:number) :any {
        return res.status(200).json({
            success:true,
            message: "Book deleted Successfully!",
            data: {bookId:id}
        })
    }

    getBooks(res:Response) :any {
        return res.status(200).send({
            success: true,
            message: "Books fetched successfully",
            data: []
        });
    }

    getBookById(res:Response, bookId:number) :any {
        return res.status(200).send({
            success: true,
            message: "Book fetched successfully",
            data: {
                id: bookId
            }
        });
    }
}