export interface ITodo {
  id: number;
  title: string;
  status: boolean;
}

export type ITodoList = ITodo[] | []

export interface TodoState {
  todoList: ITodoList;
}
