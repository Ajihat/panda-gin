export interface MobileMenuProviderProps {
	children: React.ReactNode;
}

export interface IMobileMenuContext {
	isMobileMenuOpen: boolean;
	toggleMobileMenu: () => void;
}
