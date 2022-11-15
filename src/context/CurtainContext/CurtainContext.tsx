import { useState, createContext, useCallback } from 'react';

import { CurtainContextProps, ICurtainContext } from './CurtainContext.types';

export const CurtainContext = createContext<null | ICurtainContext>(null);

export const CurtainProvider = ({ children }: CurtainContextProps) => {
	const [isCurtainOpen, setIsCurtainOpen] = useState(false);

	const openCurtain = useCallback(() => {
		setIsCurtainOpen(true);
	}, []);

	const closeCurtain = useCallback(() => {
		setIsCurtainOpen(false);
	}, []);

	const handleLinkClick = useCallback(
		(url: string, pathName: string, shouldOpenCurtain: boolean) => {
			if (url !== pathName && shouldOpenCurtain) {
				openCurtain();
			}
		},
		[openCurtain]
	);

	return (
		<CurtainContext.Provider
			value={{
				isCurtainOpen,
				openCurtain,
				closeCurtain,
				handleLinkClick,
			}}
		>
			{children}
		</CurtainContext.Provider>
	);
};
