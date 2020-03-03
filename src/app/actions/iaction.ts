import { ActionTarget } from './action-target';

export interface IAction<T>{
  target: ActionTarget;
  transform(state: T): T;
}
