export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

export enum BoardStatus { // 공개글, 비공개글
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
