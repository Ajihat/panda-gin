import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton';
import { Loader } from 'components/Loader/Loader';
import { ApiError } from 'components/ApiError/ApiError';

import { PageLink } from 'components/PageLink/PageLink';

import { appRoutes } from 'data/appRoutes/appRoutes';

import { EDIT_PRODUCT } from 'api/apiEndpoints';

import { useGetProduct } from 'pages/ProductPage/useGetProduct';
import { useEditProduct } from './useEditProduct';

import { IEditProductInputs } from './EditProducts.types';

import './EditProduct.sass';
import '../../sass/Forms.sass';

export const EditProduct = () => {
	const { id } = useParams();
	const {
		register,
		handleSubmit,
		setFocus,
		setValue,
		formState: { errors },
	} = useForm<IEditProductInputs>();

	const {
		product,
		productLoading,
		apiError: apiErrorGetProduct,
		abortControler: getProductAbortControler,
	} = useGetProduct(id as string);
	const {
		onMutate,
		productIsBeingUpdated,
		productUpdatedWithSucces,
		apiError: apiErrorEditProduct,
		abortControler: editProductAbortControler,
	} = useEditProduct(EDIT_PRODUCT, product);

	useEffect(() => {
		const getProductControler = getProductAbortControler.current;
		return () => {
			getProductControler?.abort();
		};
	}, [getProductAbortControler]);

	useEffect(() => {
		const editProductControler = editProductAbortControler.current;
		return () => {
			editProductControler?.abort();
		};
	}, [editProductAbortControler]);

	useEffect(() => {
		if (product) {
			setFocus('title');
			setValue('title', product.title);
			setValue('description', product.description);
			setValue('text', product.text);
			setValue('price', product.price);
			setValue('discount', product.discount === '' ? '0' : product.discount);
		}
	}, [product, setFocus, setValue]);

	return (
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
			className='editproduct'
		>
			<div className='editproduct__link'>
				<PageLink
					text='Back to products'
					textColor='black'
					url={appRoutes.personal_manageProducts}
					arrowPosition='left'
					shouldOpenCurtain={false}
				/>
			</div>
			<div className='editproduct__inner'>
				<form noValidate onSubmit={handleSubmit(onMutate)} className='editproduct__form'>
					{productUpdatedWithSucces && <p className='editproduct__api-sucess'>Product data updated!</p>}
					{apiErrorEditProduct && <p className='editproduct__api-error'>{apiErrorEditProduct}</p>}
					<div className='editproduct__form-section'>
						<label htmlFor='title' className='editproduct__label'>
							Title
						</label>
						<input
							{...register('title', {
								required: 'This value is required',
								minLength: {
									value: 3,
									message: 'Product title must contain at least 3 characters',
								},
							})}
							type='text'
							id='title'
							name='title'
							className='editproduct__input'
							autoComplete='off'
						/>
						{errors.title && <p className='editproduct__error-info'>{errors.title.message}</p>}
					</div>
					<div className='editproduct__form-section'>
						<label htmlFor='description' className='editproduct__label'>
							Description
						</label>
						<input
							{...register('description', {
								required: 'This value is required',
								minLength: {
									value: 7,
									message: 'Product description must contain at least 7 characters',
								},
							})}
							type='text'
							id='description'
							name='description'
							className='editproduct__input'
							autoComplete='off'
						/>
						{errors.description && <p className='editproduct__error-info'>{errors.description.message}</p>}
					</div>
					<div className='editproduct__form-section'>
						<label htmlFor='text' className='editproduct__label'>
							Text
						</label>
						<input
							{...register('text', {
								required: 'This value is required',
								minLength: {
									value: 10,
									message: 'Product description must contain at least 10 characters',
								},
							})}
							type='text'
							id='text'
							name='text'
							className='editproduct__input'
							autoComplete='off'
						/>
						{errors.text && <p className='editproduct__error-info'>{errors.text.message}</p>}
					</div>
					<div className='editproduct__form-section'>
						<label htmlFor='price' className='editproduct__label'>
							Regular Price (&euro;)
						</label>
						<input
							{...register('price', {
								required: 'This value is required',
								min: {
									value: 0.01,
									message: 'Price must be equal or greater than 0.01 €',
								},
							})}
							type='number'
							id='price'
							name='price'
							className='editproduct__input'
							autoComplete='off'
						/>
						{errors.price && <p className='editproduct__error-info'>{errors.price.message}</p>}
					</div>
					<div className='editproduct__form-section'>
						<label htmlFor='discount' className='editproduct__label'>
							Discount (%)
						</label>
						<input
							{...register('discount', {
								required: 'This value is required. If no discount put 0',
								min: {
									value: 0,
									message: 'A value between 0 and 99 is allowed',
								},
								max: {
									value: 99,
									message: 'A value between 0 and 99 is allowed',
								},
							})}
							type='number'
							id='discount'
							name='discount'
							className='editproduct__input'
							autoComplete='off'
						/>
						{errors.discount && <p className='editproduct__error-info'>{errors.discount.message}</p>}
					</div>
					<div className='editproduct__btn-holder'>
						<PrimaryButton
							text={productIsBeingUpdated ? 'Updating' : 'Update Product'}
							type='submit'
							isDisabled={productLoading || productIsBeingUpdated}
						/>
					</div>
					{(productLoading || productIsBeingUpdated) && <Loader />}
					{apiErrorGetProduct && <ApiError text={apiErrorGetProduct} />}
				</form>
			</div>
		</motion.div>
	);
};
