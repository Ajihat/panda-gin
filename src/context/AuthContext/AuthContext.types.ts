export interface IAuthContext {
    userJwtToken: null | string;
    setUserJwtToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface AuthProviderProps {
    children: React.ReactNode;
}
