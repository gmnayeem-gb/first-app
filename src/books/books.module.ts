
import { Module, NestModule,MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { BookService } from './books.service';
import { BookController } from './books.controller';
import {BookMiddlewareOne, BookMiddlewareTwo} from './books.middleware';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
  exports: []
})

export class BooksModule implements NestModule{
  configure(consumer:MiddlewareConsumer) {
    consumer
      .apply(BookMiddlewareOne)
      .exclude(
        {path:'books/findAll', method:RequestMethod.GET},
        // 'books/(.*)'
      )
      .forRoutes(
        BookController
      );

    consumer
      .apply(BookMiddlewareTwo)
      .forRoutes(
        BookController
      );
  }
}
