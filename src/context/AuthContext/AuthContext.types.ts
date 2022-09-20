export interface IAuthContext {
    userJwtToken: string | null;
    setUserJwtToken: (newValue: string | null) => void;
}

export interface AuthProviderProps {
    children: React.ReactNode;
}
