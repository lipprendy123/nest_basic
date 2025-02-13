import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('/api/users')
export class UserController {
  @Post()
  post(): string {
    return 'POST';
  }

  @Get('/hello')
  sayHello(
    @Query('first_name') firstName: string,
    @Query('last_name') lastName: string,
  ): string {
    return `Hello ${firstName} ${lastName}`;
  }

  @Get('/:id')
  getById(@Param('id') id: string): string {
    return `GET ${id}`;
  }

  @Get('/sample')
  get(): string {
    return 'Hello nest js';
  }
}
