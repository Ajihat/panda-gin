import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { ApiError } from 'components/ApiError/ApiError';
import { Listing } from 'components/Listing/Listing';

import { User } from 'pages/Personal/Personal.types';

import './ManageProducts.sass';

export const ManageProducts = () => {
	const user = useOutletContext<User>();
	const isAdmin = useMemo(() => {
		return user.username === 'admin@admin.com';
	}, [user.username]);
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
