import ReactDom from 'react-dom';
import { useForm } from 'react-hook-form';

import { Header } from 'components/Header/Header';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton';
import { Loader } from 'components/Loader/Loader';

import closeBtn from 'assets/close-btn.svg';

import { useLoginPopupContext } from 'context/LoginPopupContext/useLoginPopupContext';
import { useSubscribePopupContext } from 'context/SubscribePopupContext/useSubscribePopupContext';
import { useLogin } from './useLogin';
import { useNoScrollingWhilePopup } from 'common/useNoScrollingWhilePopup/useNoScrollingWhilePopup';
import { useTimeout } from 'common/useTimeout/useTimeout';

import { emailRegex } from 'common/regexs/emailRegex';

import { LOGIN_URL } from 'api/apiEndpoints';

import { ILoginInputs } from './LoginPopup.types';

import './LoginPopup.sass';
import '../../sass/Forms.sass';

export const LoginPopup = () => {
	const {
		register,
		handleSubmit,
		setFocus,
		formState: { errors },
	} = useForm<ILoginInputs>();
	const { openSubscribePopup } = useSubscribePopupContext();
	const { closeLoginPopup } = useLoginPopupContext();
	const { apiErrorText, isLoading, onMutate } = useLogin(LOGIN_URL);

	useTimeout(() => setFocus('username'), 400);

	useNoScrollingWhilePopup();

	return ReactDom.createPortal(
		<div className='loginpopup'>
			<div className='loginpopup__black-layer' onClick={closeLoginPopup}></div>
			<div className='loginpopup__content'>
				<Header
					smallTitle='Panda Family'
					bigTitle='Log in'
					text='Faster payment with address and payment details saved. Access your complete order history'
				/>
				<form className='loginpopup__form' noValidate onSubmit={handleSubmit(onMutate)}>
					{apiErrorText.length > 0 && <p className='loginpopup__api-error'>{apiErrorText}</p>}
					<div className='loginpopup__form-section'>
						<label htmlFor='username' className='loginpopup__label'>
							Login
						</label>
						<input
							type='email'
							id='username'
							{...register('username', {
								required: 'This value is required',
								pattern: {
									value: emailRegex,
									message: 'Invalid email address',
								},
							})}
							className='loginpopup__input'
							placeholder='Enter your email address'
							autoComplete='off'
							disabled={isLoading}
						/>
						{errors.username && <p className='loginpopup__error-info'>{errors.username.message}</p>}
					</div>
					<div className='loginpopup__form-section'>
						<label htmlFor='password' className='loginpopup__label'>
							Password
						</label>
						<input
							type='password'
							id='password'
							{...register('password', {
								required: 'This value is required',
							})}
							className='loginpopup__input'
							placeholder='Enter your password'
							disabled={isLoading}
						/>
						{errors.password && <p className='loginpopup__error-info'>{errors.password.message}</p>}
					</div>
					<div className='loginpopup__btn-holder'>
						<PrimaryButton text='Sign in' type='submit' isDisabled={isLoading} />
					</div>
					<div className='loginpopup__cta'>
						<p className='loginpopup__text'>Not yet member?</p>
						<p className='loginpopup__text loginpopup__text--gray' onClick={openSubscribePopup}>
							Subscribe
						</p>
					</div>
					{isLoading && <Loader />}
				</form>

				<img onClick={closeLoginPopup} src={closeBtn} alt='close-btn' className='loginpopup__close-btn' />
			</div>
		</div>,
		document.getElementById('portal')!
	);
};
