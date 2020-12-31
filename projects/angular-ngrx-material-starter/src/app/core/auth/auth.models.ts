import { SocialUser } from "angularx-social-login";

export interface AuthState {
  isAuthenticated: boolean;
  user: SocialUser;
}
