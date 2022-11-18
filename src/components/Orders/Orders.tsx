import { motion, AnimatePresence } from 'framer-motion';

import './Orders.sass';

export const Orders = () => {
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
