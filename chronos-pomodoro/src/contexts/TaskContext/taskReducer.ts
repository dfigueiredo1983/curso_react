import { TaskStateModel } from '../../models/TaskStateModel';
import { TaskActionsModel, TaskActionTypes } from './taskActions';

// garante que retorna um objeto do tipo TaskStateModel
export function taskReducer(
  state: TaskStateModel,
  action: TaskActionsModel,
): TaskStateModel {
  // sempre deve retornar o estado

  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      return state;
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return state;
    }
    case TaskActionTypes.RESET_STATE: {
      return state;
    }
  }

  return state;
}
