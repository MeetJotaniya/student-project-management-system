import Cookies from 'js-cookie';

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'faculty' | 'student';
  phone?: string | null;
}

// Client-side functions
export function getUserFromCookie(): User | null {
  if (typeof window === 'undefined') return null;

  const userCookie = Cookies.get('user');
  if (!userCookie) return null;

  try {
    return JSON.parse(userCookie) as User;
  } catch {
    return null;
  }
}


export function setUserCookie(user: User) {
  Cookies.set('user', JSON.stringify(user), { expires: 7, path: '/', sameSite: 'lax' });
}

export function removeUserCookie() {
  Cookies.remove('user', { path: '/' });
}

