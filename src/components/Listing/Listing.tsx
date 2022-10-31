import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Loader } from 'components/Loader/Loader';
import { ApiError } from 'components/ApiError/ApiError';

import { useGetProducts } from 'context/ProductsContext/useGetProducts';

import './Listing.sass';

export const Listing = () => {
	const [currentPage, setCurrentPage] = useState<number>(0);
	const { productsLoading, products, abortControler, apiError } = useGetProducts('all');

	useEffect(() => {
		const controler = abortControler.current;
		return () => controler?.abort();
	}, [abortControler]);
	return (
		<div className='listing'>
			{products.length !== 0 &&
				products[currentPage].map((product, index) => (
					<motion.li
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						transition={{ duration: 0.5, delay: index / 10 }}
						key={product.id}
						className='listing__item'
					>
						<Link
							to={`/product/${product.id}`}
							target='_blank'
							rel='noopener noreferrer'
							className='listing__item-left'
						>
							<img src={product.imageThumbnail} alt='product-img' className='listing__item-img' />
							<h3 className='listing__item-name'>
								{product.title}
								<br />
								<span className='listing__item-category'>({product.category})</span>
							</h3>
						</Link>
						<Link to={`product-${product.id}`} className='listing__item-right'>
							Edit
						</Link>
					</motion.li>
				))}
			<div className='listing__pagination'>
				{products.length > 1 && (
					<ul className='listing__pagination-list'>
						{products.map((product, index) => {
							return (
								<li key={index} className='listing__pagination-item'>
									<a
										onClick={() => setCurrentPage(index)}
										href='#header'
										className='listing__pagination-link'
									>
										{String(index + 1).padStart(2, '0')}
										{index === currentPage && <div className='listing__pagination-line'></div>}
									</a>
								</li>
							);
						})}
					</ul>
				)}
			</div>
			{productsLoading && <Loader />}
			{apiError && <ApiError text={apiError} />}
		</div>
	);
};
