export interface CurtainContextProps {
	children: React.ReactNode;
}

export interface ICurtainContext {
	isCurtainOpen: boolean;
	openCurtain: () => void;
	closeCurtain: () => void;
}
