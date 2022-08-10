export interface ITask {
  id: string;
  text: string;
  type: string;
  isDone: boolean;
}

export interface IAppRoutes {
  [key: string]: string;
}

export interface ITaskTypes {
  [key: string]: string;
}

interface IDonenessType {
  label: string;
  value: boolean | null;
}

export interface IDonenessTypes {
  [key: string]: IDonenessType;
}
