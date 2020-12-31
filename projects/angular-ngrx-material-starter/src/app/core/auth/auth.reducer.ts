import { AuthState } from './auth.models';
import { authLogin, authLogout } from './auth.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null
};

const reducer = createReducer(
  initialState,
  on(authLogin, (state,payload) => ({ ...state, isAuthenticated: true, ...payload })),
  on(authLogout, (state) => ({ ...state, isAuthenticated: false }))
);

export function authReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return reducer(state, action);
}
