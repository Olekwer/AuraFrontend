import { useMemo, useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { updateProfileApi, type UpdateProfileRequest } from '../../api/user';
import { useAuthStore } from '../../store/auth';
import { BirthDateTime } from './BirthDateTime';
import { BirthPlace } from './BirthPlace';

function isNonEmpty(v: unknown): boolean {
  if (v == null) return false;
  if (typeof v === 'string') return v.trim().length > 0;
  return true;
}

function isChanged<T extends string | undefined>(next: T, initial: T) {
  if (!isNonEmpty(next)) return false;
  return (next ?? '') !== (initial ?? '');
}

export function Info() {
  const token = useAuthStore((s) => s.token);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [birthTime, setBirthTime] = useState<string>('');
  const [birthPlace, setBirthPlace] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);

  const initial = useRef({
    firstName: '',
    lastName: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
  });

  const mutation = useMutation({
    mutationFn: (payload: UpdateProfileRequest) => {
      if (!token) throw new Error('Not authenticated');
      return updateProfileApi(payload, token);
    },
    onSuccess: () => {
      setMessage('Profile has been successfully updated');
      initial.current = {
        ...initial.current,
        firstName,
        lastName,
        birthDate,
        birthTime,
        birthPlace,
      };
    },
    onError: (err: any) => {
      setMessage(err?.message || 'Profile update error');
    },
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const payload: UpdateProfileRequest = {};

    if (isChanged(firstName, initial.current.firstName)) {
      payload.firstName = firstName.trim();
    }
    if (isChanged(lastName, initial.current.lastName)) {
      payload.lastName = lastName.trim();
    }
    if (isChanged(birthDate, initial.current.birthDate)) {
      payload.birthDate = birthDate;
    }
    if (isChanged(birthTime, initial.current.birthTime)) {
      payload.birthTime = birthTime;
    }
    if (isChanged(birthPlace, initial.current.birthPlace)) {
      payload.birthPlace = birthPlace.trim();
    }

    if (Object.keys(payload).length === 0) {
      setMessage('No changes to save');
      return;
    }

    mutation.mutate(payload);
  };

  const changedFlags = useMemo(() => {
    return {
      firstName: isChanged(firstName, initial.current.firstName),
      lastName: isChanged(lastName, initial.current.lastName),
      birthDate: isChanged(birthDate, initial.current.birthDate),
      birthTime: isChanged(birthTime, initial.current.birthTime),
      birthPlace: isChanged(birthPlace, initial.current.birthPlace),
    };
  }, [firstName, lastName, birthDate, birthTime, birthPlace]);

  return (
    <div className="relative flex min-h-[calc(100vh-5rem)] w-full items-start justify-center p-6">
      <div className="flex w-full max-w-md flex-col gap-6 rounded-xl border bg-gradient-to-r from-slate-800/60 to-blue-900/40 border-blue-700/40 p-8 text-blue-100">
        <h1 className="text-xl font-bold">Profile</h1>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col text-left">
            <span className="mb-1 text-blue-300/80">First name</span>
            <input
              type="text"
              className={`rounded border bg-transparent px-3 py-2 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                changedFlags.firstName ? 'border-blue-400' : 'border-gray-600'
              }`}
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>

          <label className="flex flex-col text-left">
            <span className="mb-1 text-blue-300/80">Last name</span>
            <input
              type="text"
              className={`rounded border bg-transparent px-3 py-2 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                changedFlags.lastName ? 'border-blue-400' : 'border-gray-600'
              }`}
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>

          <BirthDateTime
            birthDate={birthDate}
            birthTime={birthTime}
            onChange={({ birthDate: bd, birthTime: bt }) => {
              setBirthDate(bd);
              setBirthTime(bt);
            }}
          />

          <div className="flex flex-col text-left">
            <span className="mb-1 text-blue-300/80">Birth place</span>
            <BirthPlace
              value={birthPlace}
              onChange={setBirthPlace}
              language="en"
            />
            <div
              className={`mt-1 h-[1px] w-full ${
                changedFlags.birthPlace ? 'bg-blue-400/60' : 'bg-transparent'
              }`}
            />
          </div>

          <button
            type="submit"
            disabled={mutation.isPending}
            className="mt-2 rounded-sm bg-blue-700 py-2 text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {mutation.isPending ? 'Saving...' : 'Change'}
          </button>
        </form>

        {message && (
          <div className="mt-2 text-sm text-blue-200">
            {message}
          </div>
        )}
        {mutation.isError && !message && (
          <div className="mt-2 text-sm text-red-400">
            {(mutation.error as Error)?.message || 'Error'}
          </div>
        )}
      </div>
    </div>
  );
}