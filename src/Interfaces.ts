export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

export type ITodoList = ITodo[] | [];

export interface TodoState {
  todoList: ITodoList;
}

export interface ModalState {
  visible: boolean;
  title: string;
}

export interface ModalArgs {
  title: string;
}
