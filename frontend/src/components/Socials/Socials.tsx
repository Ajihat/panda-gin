import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';

import './Socials.sass';

export const Socials = () => {
	return (
		<>
			<a href='https://www.facebook.com/PandaGinBio/' rel='noreferrer' target='_blank' className='socials'>
				<FaFacebookF className='socials__icon' />
			</a>
			<a href='https://www.instagram.com/panda.gin/' rel='noreferrer' target='_blank' className='socials'>
				<SiInstagram className='socials__icon' />
			</a>
			<a href='https://www.pinterest.fr/pandagin/' rel='noreferrer' target='_blank' className='socials'>
				<FaPinterestP className='socials__icon' />
			</a>
		</>
	);
};
