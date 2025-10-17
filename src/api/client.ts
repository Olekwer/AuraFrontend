export type HttpClientOptions = {
  baseUrl?: string;
  headers?: Record<string, string>;
};

const DEFAULT_BASE_URL = '/';

export class HttpClient {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor(options?: HttpClientOptions) {
    this.baseUrl = options?.baseUrl ?? DEFAULT_BASE_URL;
    this.headers = {
      'Content-Type': 'application/json',
      ...(options?.headers ?? {}),
    };
  }

  private mergeHeaders(
    additionalHeaders?: HeadersInit,
  ): Record<string, string> {
    let headersObj: Record<string, string> = { ...this.headers };

    if (!additionalHeaders) {
      return headersObj;
    }

    if (additionalHeaders instanceof Headers) {
      additionalHeaders.forEach((value, key) => {
        headersObj[key] = value;
      });
    } else if (Array.isArray(additionalHeaders)) {
      additionalHeaders.forEach(([key, value]) => {
        headersObj[key] = value;
      });
    } else {
      Object.assign(headersObj, additionalHeaders);
    }

    return headersObj;
  }

  async get<T>(path: string, init?: RequestInit): Promise<T> {
    const res = await fetch(this.baseUrl + path, {
      method: 'GET',
      headers: this.mergeHeaders(init?.headers),
      credentials: 'include',
      ...init,
    });
    if (!res.ok) {
      const msg = await safeText(res);
      throw new Error(msg || `Request failed with status ${res.status}`);
    }
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      return (await res.json()) as T;
    }
    return (await res.text()) as unknown as T;
  }

  async post<T>(path: string, body: unknown, init?: RequestInit): Promise<T> {
    const res = await fetch(this.baseUrl + path, {
      method: 'POST',
      headers: this.mergeHeaders(init?.headers),
      body: JSON.stringify(body),
      credentials: 'include',
      ...init,
    });
    if (!res.ok) {
      const msg = await safeText(res);
      throw new Error(msg || `Request failed with status ${res.status}`);
    }
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      return (await res.json()) as T;
    }
    return (await res.text()) as unknown as T;
  }

  async patch<T>(path: string, body: unknown, init?: RequestInit): Promise<T> {
    const res = await fetch(this.baseUrl + path, {
      method: 'PATCH',
      headers: this.mergeHeaders(init?.headers),
      body: JSON.stringify(body),
      credentials: 'include',
      ...init,
    });
    if (!res.ok) {
      const msg = await safeText(res);
      throw new Error(msg || `Request failed with status ${res.status}`);
    }
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      return (await res.json()) as T;
    }
    return (await res.text()) as unknown as T;
  }
}

async function safeText(res: Response) {
  try {
    return await res.text();
  } catch {
    return '';
  }
}

export const http = new HttpClient({
  baseUrl: 'https://web-production-3964.up.railway.app/',
});
