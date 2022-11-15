export interface IAuthContext {
	userJwtToken: string | null;
	setUserJwtToken: (newValue: string | null) => void;
	userData: User | null;
	setUserData: React.Dispatch<React.SetStateAction<User | null>>;
	isLegalDrinkingAge: boolean | null;
	setIsLegalDrinkingAge: (newValue: boolean | null) => void;
	isAdmin: boolean;
}

export interface AuthProviderProps {
	children: React.ReactNode;
}

export interface User {
	firstname: string;
	lastname: string;
	userId: number;
	username: string;
}
