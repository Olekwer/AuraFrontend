import { http } from './client';

export type LoginRequest = {
  email: string;
  password: string;
};

export type UserData = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  zodiacSign: string;
  element: string;
  isPremium: boolean;
};

export type LoginResponse = {
  user: UserData;
  accessToken: string;
  refreshToken: string;
};

export function loginApi(payload: LoginRequest): Promise<LoginResponse> {
  return http.post('auth/login', payload);
}
