import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { Request, Response, NextFunction } from 'express';

// middlewares
export function globalMiddlewareOne(req: Request, res: Response, next: NextFunction) {
  console.log(`This is global middleware one`);
  next();
};

export function globalMiddlewareTwo(req: Request, res: Response, next: NextFunction) {
  console.log(`This is global middleware two`);
  next();
};

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  
  app.use(globalMiddlewareOne);
  app.use(globalMiddlewareTwo);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap(); 
