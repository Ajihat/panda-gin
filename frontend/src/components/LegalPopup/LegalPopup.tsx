import { useEffect } from 'react';
import ReactDom from 'react-dom';
import { motion } from 'framer-motion';

import { PopupContent } from 'components/PopupContent/PopupContent';

import { useAuthContext } from 'context/AuthContext/useAuthContext';

import logoFull from 'assets/logo-full.png';

import { NO_SCROLL } from 'data/specialClasses/specialClasses';

import './LegalPopup.sass';

export const LegalPopup = () => {
	const { setIsLegalDrinkingAge } = useAuthContext();
	useEffect(() => {
		document.body.classList.add(NO_SCROLL);
		return () => document.body.classList.remove(NO_SCROLL);
	}, []);

	return ReactDom.createPortal(
		<PopupContent>
			<motion.div
				key='legal-popup'
				className='legalpopup'
				exit={{
					opacity: 0,
				}}
				transition={{ duration: 0.4 }}
			>
				<div className='legalpopup__inner'>
					<div className='legalpopup__logo'>
						<img src={logoFull} alt='logo-panda' className='legalpopup__full' />
					</div>
					<div className='legalpopup__buttons'>
						<motion.button
							key='btn-1'
							onClick={() => setIsLegalDrinkingAge(true)}
							className='legalpopup__btn'
							exit={{
								bottom: 100,
							}}
							transition={{ duration: 0.1, delay: 0 }}
						>
							I am 18 or older
						</motion.button>
						<motion.button
							key='btn-2'
							onClick={() => setIsLegalDrinkingAge(false)}
							className='legalpopup__btn'
							exit={{
								bottom: 100,
							}}
							transition={{ duration: 0.1, delay: 0.1 }}
						>
							I am under 18
						</motion.button>
					</div>
				</div>
				<p className='legalpopup__terms'>
					We are committed to responsible drinking so we need to check that you can legally enjoy panda Gin.
					<br />
					You must be of legal drinking age in your country to use this site.
					<br />
					Please complete the data fields above (we do not retain this information).
					<br />
					By entering, you agree to our Terms of Use and to our Privacy Policy By entering the site,
					<br />
					you are agreeing to our cookie policy.
				</p>
				<div className='legalpopup__white-layer'></div>
			</motion.div>
		</PopupContent>,
		document.getElementById('portal')!
	);
};
