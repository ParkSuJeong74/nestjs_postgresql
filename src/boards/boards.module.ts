import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BoardProviders } from '../repository/board.repository';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BoardsController],
  providers: [...BoardProviders, BoardsService],
})
export class BoardsModule {}
