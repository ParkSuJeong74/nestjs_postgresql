import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get('/')
  getAllTasks(): Board[] {
    return this.boardService.getAllBoards();
  }

  @Post('/')
  createBoard(
    @Body('title') title: string,
    @Body('desciption') desciption: string,
  ) {}
}
