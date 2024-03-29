import { useForm } from 'react-hook-form';

import { Header } from 'components/Header/Header';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton';
import { Loader } from 'components/Loader/Loader';

import { useNewsletter } from './useNewsletter';

import { emailRegex } from 'common/regexs/emailRegex';

import { INewsletterInputs } from './Newsletter.types';

import './Newsletter.sass';

export const Newsletter = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<INewsletterInputs>();

	const {
		newsletterState: { isLoading, apiErrorText, isSuccess },
		onMutate,
	} = useNewsletter();
	return (
		<div className='newsletter'>
			<div className='newsletter__inner'>
				<Header
					smallTitle='Join the Panda Family'
					bigTitle='Newsletter'
					text='Stay up to date with new products, promotions and our limited editions'
				/>
				<form className='newsletter__form' onSubmit={handleSubmit(onMutate)}>
					{isSuccess && <p className='newsletter__api-sucess'>Subscribed to newsletter</p>}
					{apiErrorText.length > 0 && <p className='newsletter__api-error'>{apiErrorText}</p>}
					<div className='newsletter__form-section newsletter__form-section--horizontal'>
						<input
							type='text'
							placeholder='Enter email address'
							disabled={isLoading}
							className='newsletter__input newsletter__input--newsletter'
							{...register('newsletterEmail', {
								required: 'This value is required',
								pattern: {
									value: emailRegex,
									message: 'Invalid email address',
								},
							})}
						/>
						<div className='newsletter__btn-holder'>
							<PrimaryButton type='submit' text='Become a panda' isDisabled={isLoading} />
						</div>
					</div>
					{errors.newsletterEmail && (
						<p className='newsletter__error-info'>{errors.newsletterEmail.message}</p>
					)}
					<div className='newsletter__form-section newsletter__form-section--horizontal'>
						<label htmlFor='terms-newsletter' className='subscribepopup__label-checkbox'>
							I accept that Panda Gin will process my personal data (PRIVACY POLICY)
						</label>
						<input
							type='checkbox'
							id='terms-newsletter'
							className='subscribepopup__input-checkbox'
							{...register('termsChecked', {
								required: 'This value is required',
							})}
						/>
					</div>
					{errors.termsChecked && <p className='newsletter__error-info'>{errors.termsChecked.message}</p>}
					{isLoading && <Loader />}
				</form>
			</div>
		</div>
	);
};
