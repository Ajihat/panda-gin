import { PopupContentProps } from './PopupContent.types';

import { useNoScrollingWhilePopup } from 'common/useNoScrollingWhilePopup/useNoScrollingWhilePopup';

export const PopupContent = ({ children }: PopupContentProps) => {
	useNoScrollingWhilePopup();

	return <div className='popup-content'>{children}</div>;
};
