import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import type { FormEvent } from 'react';
import { loginApi } from '../../api/auth';
import type { LoginRequest } from '../../api/auth';
import { useAuthStore } from '../../store/auth';
import { useNavigate } from 'react-router-dom';

export function Info() {
  const [showPopup] = useState(true);
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');
  const navigate = useNavigate();

  const login = useAuthStore((s) => s.login);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const checkAuthFromCookie = useAuthStore((s) => s.checkAuthFromCookie);

  useEffect(() => {
    checkAuthFromCookie();
  }, [checkAuthFromCookie]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const mutation = useMutation({
    mutationFn: (payload: LoginRequest) => loginApi(payload),
    onSuccess: (data) => {
      const user = data.user;

      login({
        token: data.accessToken,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        zodiacSign: user.zodiacSign,
        element: user.element,
        isPremium: user.isPremium,
      });

      navigate('/');
    },
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <div className="relative flex h-full flex-grow items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-6">
      {showPopup && (
        <div className="fixed z-50 flex w-full max-w-sm flex-col gap-6 rounded-xl border border-blue-700/40 bg-gradient-to-r from-slate-800/60 to-blue-900/40 p-8 text-blue-100">
          <h1 className="text-xl font-bold">Welcome to our website!</h1>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <label className="flex items-center gap-3">
              <span className="w-20 text-blue-300/80">Login</span>
              <input
                type="text"
                className="flex-grow rounded border border-gray-600 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter login"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
              />
            </label>

            <label className="flex items-center gap-3">
              <span className="w-20 text-blue-300/80">Password</span>
              <input
                type="password"
                className="flex-grow rounded border border-gray-600 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </label>

            <button
              type="submit"
              disabled={mutation.isPending}
              className="mt-4 rounded-sm bg-blue-700 py-2 text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {mutation.isPending ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          {mutation.isError && (
            <div className="mt-2 text-sm text-red-400">
              {(mutation.error as Error)?.message || 'Login failed'}
            </div>
          )}

          <div className="mt-2 flex justify-center">
            <button
              type="button"
              className="h-auto rounded-md border border-blue-700/30 bg-slate-800/50 px-3 py-2 text-sm text-blue-200 hover:bg-slate-700/50 hover:underline"
              onClick={() => alert('Redirect to sign up')}
            >
              Sign up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
