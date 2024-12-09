import { NestFactory } from '@nestjs/core';  
import { Request, Response, NextFunction } from 'express';

import { AppModule } from './app.module';
// import { RootModule } from './root.module';

// middlewares
export function globalMiddlewareOne(req: Request, res: Response, next: NextFunction) {
  console.log(`This is global middleware one`);
  next();
};

export function globalMiddlewareTwo(req: Request, res: Response, next: NextFunction) {
  console.log(`This is global middleware two`);
  next();
};

// it's for books
// async function bootstrap() {
//   const app = await NestFactory.create(RootModule);
  
//   app.use(globalMiddlewareOne);
//   app.use(globalMiddlewareTwo);

//   await app.listen(process.env.PORT ?? 3000);
// }

// it's for authentication
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap(); 