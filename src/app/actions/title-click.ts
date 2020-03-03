import { AppState } from '../model/index';
import { IAction } from './iaction';
import { ActionTarget } from './action-target';

export class TitleClick implements IAction<AppState>{
  target = ActionTarget.AppState

  static INSTANCE = new TitleClick()

  transform(state: AppState): AppState {
    return {
      ...state,
      title: state.title+'K'
    }
  }
}
