export type ErrorResponseType = {
  error: string[];
  id: string;
  message: string;
};

export type FetchErrorType = Error & {
  info?: ErrorResponseType;
  status?: number;
};

export interface RequestOptions {
  method?: string;
  body?: unknown;
  token?: string;
  contentType?: string;
  headers?: Record<string, string>;
}

export type TabsContextType = {
  selectedTab: number;
};

export interface User {
  id: string;
  name: string;
  role: string;
}

export interface UseAuthStore {
  token: string;
  user: User;
  clearToken: () => void;
  setUser: (a: User) => void;
  setToken: (t: string) => void;
}
