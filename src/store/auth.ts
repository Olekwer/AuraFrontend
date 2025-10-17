import { create } from 'zustand';
import { setCookie, getCookie, deleteCookie } from '../lib/cookies';

const TOKEN_COOKIE = 'auth_token';
const EMAIL_COOKIE = 'auth_email';
const FIRSTNAME_COOKIE = 'auth_firstName';
const LASTNAME_COOKIE = 'auth_lastName';
const ZODIACSIGN_COOKIE = 'auth_zodiacSign';
const ELEMENT_COOKIE = 'auth_element';
const ISPERCENT_COOKIE = 'auth_isPremium';

type UserState = {
  token: string | null;
  email: string | null;
  firstName: string;
  lastName: string;
  zodiacSign: string;
  element: string;
  isPremium: boolean;
  isAuthenticated: boolean;

  login: (payload: {
    token: string;
    email: string;
    firstName: string;
    lastName: string;
    zodiacSign: string;
    element: string;
    isPremium: boolean;
  }) => void;

  logout: () => void;

  checkAuthFromCookie: () => void;
};

export const useAuthStore = create<UserState>((set, get) => ({
  token: null,
  email: null,
  firstName: '',
  lastName: '',
  zodiacSign: '',
  element: '',
  isPremium: false,
  isAuthenticated: false,

  login: ({ token, email, firstName, lastName, zodiacSign, element, isPremium }) => {
    setCookie(TOKEN_COOKIE, token);
    setCookie(EMAIL_COOKIE, email);
    setCookie(FIRSTNAME_COOKIE, firstName);
    setCookie(LASTNAME_COOKIE, lastName);
    setCookie(ZODIACSIGN_COOKIE, zodiacSign);
    setCookie(ELEMENT_COOKIE, element);
    setCookie(ISPERCENT_COOKIE, isPremium ? 'true' : 'false');

    set({
      token,
      email,
      firstName,
      lastName,
      zodiacSign,
      element,
      isPremium,
      isAuthenticated: true,
    });
  },

  logout: () => {
    deleteCookie(TOKEN_COOKIE);
    deleteCookie(EMAIL_COOKIE);
    deleteCookie(FIRSTNAME_COOKIE);
    deleteCookie(LASTNAME_COOKIE);
    deleteCookie(ZODIACSIGN_COOKIE);
    deleteCookie(ELEMENT_COOKIE);
    deleteCookie(ISPERCENT_COOKIE);

    set({
      token: null,
      email: null,
      firstName: '',
      lastName: '',
      zodiacSign: '',
      element: '',
      isPremium: false,
      isAuthenticated: false,
    });
  },

  checkAuthFromCookie: () => {
    const token = getCookie(TOKEN_COOKIE);
    const email = getCookie(EMAIL_COOKIE);
    const firstName = getCookie(FIRSTNAME_COOKIE) ?? '';
    const lastName = getCookie(LASTNAME_COOKIE) ?? '';
    const zodiacSign = getCookie(ZODIACSIGN_COOKIE) ?? '';
    const element = getCookie(ELEMENT_COOKIE) ?? '';
    const isPremiumString = getCookie(ISPERCENT_COOKIE);
    const isPremium = isPremiumString === 'true';

    const current = get();

    const newToken = token ?? null;
    const newEmail = email ?? null;
    const newFirstName = firstName;
    const newLastName = lastName;
    const newZodiacSign = zodiacSign;
    const newElement = element;
    const newIsPremium = isPremium;
    const newIsAuthenticated = Boolean(token);

    if (
      current.token === newToken &&
      current.email === newEmail &&
      current.firstName === newFirstName &&
      current.lastName === newLastName &&
      current.zodiacSign === newZodiacSign &&
      current.element === newElement &&
      current.isPremium === newIsPremium &&
      current.isAuthenticated === newIsAuthenticated
    ) {
      return;
    }

    if (token) {
      set({
        token: newToken,
        email: newEmail,
        firstName: newFirstName,
        lastName: newLastName,
        zodiacSign: newZodiacSign,
        element: newElement,
        isPremium: newIsPremium,
        isAuthenticated: true,
      });
    } else {
      set({
        token: null,
        email: null,
        firstName: '',
        lastName: '',
        zodiacSign: '',
        element: '',
        isPremium: false,
        isAuthenticated: false,
      });
    }
  },
}));