import { Helmet } from 'react-helmet-async';

import { Header } from 'components/Header/Header';
import { Socials } from 'components/Socials/Socials';
import { ContactForm } from 'components/ContactForm/ContactForm';

import contactPic from 'assets/contact-pic.jpg';

import './Contact.sass';

export const Contact = () => {
	return (
		<div className='contact'>
			<Helmet>
				<title>Contact | Panda Gin</title>
				<meta
					name='description'
					content='The complete range of Panda Gin - 50 CL - Liter - 5 CL spirits as well as our limited editions.
					Give the giftbox panda gin containing high-end glasses - a bottle - a card game - a cocktail notebook'
				/>
			</Helmet>
			<div className='contact__row'>
				<div className='contact__row-left'>
					<img src={contactPic} alt='panda-gin-contact' className='contact__pic' />
				</div>
				<div className='contact__row-right'>
					<Header bigTitle='Contact' alignment='left' smallTitle='We are happy to answer you' />
					<div className='contact__details'>
						<p className='contact__details-numbers'>
							<a href='tel:+32478048545' className='contact__details-number'>
								+32 478.04.85.45{' '}
							</a>
							<span className='contact__slash'>/</span>
							<a href='tel:+32471083275' className='contact__details-number'>
								+32 471.08.32.75
							</a>
							<a href='mailto:info@panda-gin.com' className='contact__details-email'>
								info@panda-gin.com
							</a>
							<p className='contact__text'>
								The head office (9 a.m. to 5 p.m.) - 31 Drève de la Meute - 1410 Waterloo, Belgium
							</p>
						</p>
						<div className='contact__socials'>
							<Socials />
						</div>
						<a href='#contact-form' className='contact__specyfic'>
							A specyfic request?
						</a>
					</div>
				</div>
			</div>
			<div className='contact__row' id='contact-form'>
				<ContactForm />
			</div>
		</div>
	);
};
