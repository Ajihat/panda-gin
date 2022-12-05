import { motion } from 'framer-motion';

import './Loader.sass';

export const Loader = () => {
	return (
		<motion.div className='loader'>
			<motion.div
				className='loader__spinner'
				exit={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{ duration: 0.2 }}
			></motion.div>
		</motion.div>
	);
};
