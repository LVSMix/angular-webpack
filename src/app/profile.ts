// profile.ts
import { ActionReducer, Action } from '@ngrx/store';

export const ADD_PROFILE = 'ADD_PROFILE';
export const REMOVE_PROFILE = 'REMOVE_PROFILE';
export const RESET_PROFILE = 'RESET_PROFILE';

export interface Profile {
  name: string;
  lastname: string;
  position: string;
}

const initialState: Profile = {
  name: 'Marcelo',
  lastname: 'Carmona',
  position: 'developer'
};

export function profileReducer(state: Profile = initialState, action: Action) {
  switch (action.type) {
    case ADD_PROFILE: {
      return Object.assign({}, action.payload);
    }

    case REMOVE_PROFILE:
      return action.payload;

    case RESET_PROFILE:
      return action.payload;

    default:
      return state;
  }
}
