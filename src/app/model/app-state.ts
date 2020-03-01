import {Todo} from './todo'
import { VisibilityFilter } from './visibility-filter';

export interface AppState {
    title: string,
    todos: Todo[],
    visibilityFilter:  VisibilityFilter
}

