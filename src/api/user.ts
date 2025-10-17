import { http } from './client';

export type UpdateProfileRequest = {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  birthTime?: string;
  birthPlace?: string;
  zodiacSign?: string;
  element?: string;
  timezone?: string;
  language?: string;
};

export type UpdateProfileResponse = {
  email: string;
  firstName: string;
  lastName: string;
  birthDate: string | null;
  birthTime: string | null;
  birthPlace: string | null;
  zodiacSign: string;
  element: string;
  timezone: string | null;
  language: string | null;
};

export function updateProfileApi(payload: UpdateProfileRequest, token: string): Promise<UpdateProfileResponse> {
  return http.patch('users/profile', payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}