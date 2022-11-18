import { useEffect, useRef } from 'react';

export const useInterval = (callback: () => void, intervalTime: number) => {
	const intervalRef = useRef<null | NodeJS.Timer>(null);
	useEffect(() => {
		intervalRef.current = setInterval(callback, intervalTime);
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [callback, intervalTime]);
	return intervalRef;
};
