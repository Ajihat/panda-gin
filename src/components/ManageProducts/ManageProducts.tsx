import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ApiError } from 'components/ApiError/ApiError';
import { Listing } from 'components/Listing/Listing';

import { useAuthContext } from 'context/AuthContext/useAuthContext';

import './ManageProducts.sass';

export const ManageProducts = () => {
	const { userData } = useAuthContext();
	const isAdmin = useMemo(() => {
		return userData?.username === 'admin@admin.com';
	}, [userData?.username]);
	return (
		<AnimatePresence>
			<motion.div
				initial={{
					opacity: 0,
				}}
				exit={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{ duration: 0.5 }}
				className='manageproducts'
			>
				{!isAdmin && <ApiError text='You are not authorized to manage shop products' />}
				{isAdmin && <Listing />}
			</motion.div>
		</AnimatePresence>
	);
};
