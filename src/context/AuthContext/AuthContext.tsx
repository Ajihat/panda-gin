import { useState, createContext } from 'react';

import { IAuthContext, AuthProviderProps, User } from './AuthContext.types';

import { useLocalStorage } from 'common/useLocalStorage/useLocalStorage';

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [userData, setUserData] = useState<User | null>(null);
	const { value: userJwtToken, setNewValue: setUserJwtToken } = useLocalStorage<string>('jwt');
	const { value: isLegalDrinkingAge, setNewValue: setIsLegalDrinkingAge } =
		useLocalStorage<boolean>('isLegalDrinkingAge');

	return (
		<AuthContext.Provider
			value={{
				userJwtToken,
				setUserJwtToken,
				userData,
				setUserData,
				isLegalDrinkingAge,
				setIsLegalDrinkingAge,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
