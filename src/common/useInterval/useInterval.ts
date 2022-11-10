import { useEffect, useRef } from 'react';

export const useInterval = <T>(callback: () => void, intervalTime: number, additionalDependency?: T) => {
	const intervalRef = useRef<null | NodeJS.Timer>(null);
	useEffect(() => {
		intervalRef.current = setInterval(callback, intervalTime);
		return () => clearInterval(intervalRef.current as NodeJS.Timer);
	}, [callback, intervalTime, additionalDependency]);
	return intervalRef;
};
