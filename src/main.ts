import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create<NestExpressApplication>(AppModule,);

 app.useStaticAssets(join(__dirname, '..', 'public'));
 app.setBaseViewsDir(join(__dirname, '..', 'views'));
 app.setViewEngine("ejs");

  await app.listen(3000);
  logger.log('App is running on port 3000');
}
bootstrap();
