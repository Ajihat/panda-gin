import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { axiosInstance as axios } from 'api/axios';

import './Orders.sass';

export const Orders = () => {
	useEffect(() => {
		axios({
			method: 'GET',
			url: '/orders',
		}).then((res) => console.log(res));
	}, []);
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
				className='orders'
			>
				<p className='orders__text'>No orders yet</p>
			</motion.div>
		</AnimatePresence>
	);
};
