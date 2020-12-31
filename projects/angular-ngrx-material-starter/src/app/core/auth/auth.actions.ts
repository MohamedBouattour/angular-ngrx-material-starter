import { createAction, props } from '@ngrx/store';
import { SocialUser } from 'angularx-social-login/entities/social-user';

export const authLogin = createAction('[Auth] Login', props<{ user: SocialUser; }>());
export const authLogout = createAction('[Auth] Logout');
