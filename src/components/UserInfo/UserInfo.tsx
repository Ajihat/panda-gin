import { motion, AnimatePresence } from 'framer-motion';

import { useAuthContext } from 'context/AuthContext/useAuthContext';

import './UserInfo.sass';
import '../../sass/Forms.sass';

export const UserInfo = () => {
	const { userData } = useAuthContext();
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
				className='userinfo'
			>
				<div className='userinfo__form-section'>
					<label htmlFor='username' className='userinfo__label'>
						Email
					</label>
					<input
						value={userData?.username}
						type='email'
						id='username'
						className='userinfo__input'
						autoComplete='off'
						readOnly
					/>
				</div>
				<div className='userinfo__form-section'>
					<label htmlFor='firstname' className='userinfo__label'>
						Firstname
					</label>
					<input
						value={userData?.firstname}
						type='text'
						id='firstname'
						className='userinfo__input'
						autoComplete='off'
						readOnly
					/>
				</div>
				<div className='userinfo__form-section'>
					<label htmlFor='lastname' className='userinfo__label'>
						Lastname
					</label>
					<input
						value={userData?.lastname}
						type='text'
						id='lastname'
						className='userinfo__input'
						autoComplete='off'
						readOnly
					/>
				</div>
				<div className='userinfo__form-section'>
					<label htmlFor='identifier' className='userinfo__label'>
						Identifier
					</label>
					<input
						value={userData?.userId}
						type='text'
						id='identifier'
						className='userinfo__input'
						autoComplete='off'
						readOnly
					/>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};
