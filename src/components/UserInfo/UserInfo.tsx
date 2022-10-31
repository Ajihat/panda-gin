import { useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { User } from 'pages/Personal/Personal.types';

import './UserInfo.sass';
import '../../sass/Forms.sass';

export const UserInfo = () => {
	const user = useOutletContext<User>();
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
						value={user.username}
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
						value={user.firstname}
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
						value={user.lastname}
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
						value={user.userId}
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
