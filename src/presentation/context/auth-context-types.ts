export type ContextProps = {
  isLoading: boolean;
  hasLogged: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
};
