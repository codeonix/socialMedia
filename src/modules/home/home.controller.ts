import { Controller, Get, Render } from '@nestjs/common';
import { response } from 'express';
import { HomeService } from './home.service';

@Controller('index')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  @Render('home')
  overview(){
    return {title: 'Overview'};
  }
   
}
