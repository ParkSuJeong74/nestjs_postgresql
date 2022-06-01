import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
    private boards = []    // 다른 컴포넌트에서 수정 불가

    getAllBoards() {
        return this.boards
    }
}
