import { Module } from '@nestjs/common';
import { HomeModule } from './modules/home/home.module';

@Module({
  imports: [HomeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
