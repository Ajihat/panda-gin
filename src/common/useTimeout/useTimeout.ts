import { useEffect, useRef } from 'react';

export const useTimeout = (callback: () => void, timeoutTime: number) => {
	const timeoutRef = useRef<null | NodeJS.Timer>(null);
	useEffect(() => {
		timeoutRef.current = setTimeout(callback, timeoutTime);
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [callback, timeoutTime]);
	return timeoutRef;
};
