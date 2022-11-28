import { useForm } from 'react-hook-form';

import { Header } from 'components/Header/Header';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton';

import { nameRegex } from 'common/regexs/nameRegex';
import { emailRegex } from 'common/regexs/emailRegex';

import { IContactFormInputs } from './ContactForm.types';

import './ContactForm.sass';
import '../../sass/Forms.sass';

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IContactFormInputs>();
	const onSubmit = (data: IContactFormInputs) => console.log(data);
	return (
		<div className='contactform'>
			<Header alignment='left' bigTitle='Specyfic request' smallTitle='Need help?' />
			<form onSubmit={handleSubmit(onSubmit)} className='contactform__form' noValidate>
				<div className='contactform__left'>
					<div className='contactform__form-section'>
						<label htmlFor='nickname' className='contactform__label'>
							First name
						</label>
						<input
							type='text'
							id='firstname'
							{...register('firstname', {
								required: 'This value is required',
								pattern: {
									value: nameRegex,
									message: 'Invalid firstname',
								},
								minLength: {
									value: 2,
									message: 'Firstname must contain at least 2 characters',
								},
								maxLength: {
									value: 14,
									message: 'Firstname must contain less then 15 characters',
								},
							})}
							className='contactform__input'
							autoComplete='off'
							placeholder='Enter your first name'
						/>
						{errors.firstname && <p className='contactform__error-info'>{errors.firstname.message}</p>}
					</div>
					<div className='contactform__form-section'>
						<label htmlFor='lastname' className='contactform__label'>
							Last name
						</label>
						<input
							type='text'
							id='lastname'
							{...register('lastname', {
								required: 'This value is required',
								pattern: {
									value: nameRegex,
									message: 'Invalid lastname',
								},
								minLength: {
									value: 2,
									message: 'Lastname must contain at least 2 characters',
								},
								maxLength: {
									value: 14,
									message: 'Lastname must contain less then 15 characters',
								},
							})}
							className='contactform__input'
							autoComplete='off'
							placeholder='Enter your last name'
						/>
						{errors.lastname && <p className='subscribepopup__error-info'>{errors.lastname.message}</p>}
					</div>
					<div className='contactform__form-section'>
						<label htmlFor='email' className='contactform__label'>
							Email
						</label>
						<input
							type='email'
							id='email'
							{...register('email', {
								required: 'This value is required',
								pattern: {
									value: emailRegex,
									message: 'Invalid email address',
								},
							})}
							className='contactform__input'
							autoComplete='off'
							placeholder='Enter your email address'
						/>
						{errors.email && <p className='subscribepopup__error-info'>{errors.email.message}</p>}
					</div>
				</div>
				<div className='contactform__right'>
					<div className='contactform__form-section'>
						<label htmlFor='subject' className='contactform__label'>
							Subject
						</label>
						<select
							id='subject'
							{...register('subject', {
								required: 'This value is required',
							})}
							className='contactform__input'
							autoComplete='off'
						>
							<option value=''>Select</option>
							<option value='general'>General request</option>
							<option value='after-sale'>After sales service</option>
							<option value='professional'>I am professional</option>
						</select>
						{errors.subject && <p className='subscribepopup__error-info'>{errors.subject.message}</p>}
					</div>
					<div className='contactform__form-section'>
						<label htmlFor='message' className='contactform__label'>
							Message
						</label>
						<textarea
							id='message'
							{...register('message', {
								required: 'This value is required',
								minLength: {
									value: 5,
									message: 'Message must contain at least 5 characters',
								},
							})}
							className='contactform__textarea'
							placeholder='Your message here'
						></textarea>
						{errors.message && <p className='subscribepopup__error-info'>{errors.message.message}</p>}
					</div>
					<div className='contactform__form-section contactform__form-section--horizontal'>
						<label htmlFor='terms' className='contactform__label-checkbox'>
							I accept that Panda Gin will process my personal data (PRIVACY POLICY)
						</label>
						<input
							type='checkbox'
							id='terms'
							{...register('terms', {
								required: 'This value is required',
							})}
							className='subscribepopup__input-checkbox'
						/>
						{errors.terms && <p className='subscribepopup__error-info'>{errors.terms.message}</p>}
					</div>
					<div className='contactform__btn-holder'>
						<PrimaryButton text='Send your message' type='submit' />
					</div>
				</div>
			</form>
		</div>
	);
};
