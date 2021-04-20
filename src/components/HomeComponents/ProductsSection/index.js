import React, { useEffect, useState } from 'react';
import Product from '../../../containers/ProductContainer';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../data/store/action';

const ProductSection = () => {
	const product = useSelector((state) => state);
	const dispatch = useDispatch();
	const dataLength = product.items?.length - 3;

	const handleAddToCart = (product_id) => {
		dispatch(addToCart(product_id));
	};

	const [randomIndex, setRandomIndex] = useState({
		initialValue: 0,
		endValue: 0,
	});

	const getRandomProduct = () => {
		if (dataLength > 0) {
			const randomIndex = Math.floor(Math.random() * dataLength);
			setRandomIndex({
				initialValue: randomIndex,
				endValue: randomIndex + 3,
			});
		}
	};

	useEffect(() => {
		if (dataLength !== 0) {
			getRandomProduct();
		}
		// eslint-disable-next-line
	}, [dataLength]);

	return (
		<section className={styles.product_section}>
			<div className="container">
				<div className={styles.product_top_wrapper}>
					<p>Shop Products</p>
					<h1>Open 24/7/365.</h1>
				</div>

				<div className="product_list_wrapper">
					{product.items?.[0] === undefined ? (
						<div className="loader">Loading...</div>
					) : (
						<div className="product_list_item">
							{product.items
								?.slice(randomIndex.initialValue, randomIndex.endValue)
								.map((item) => (
									<Product
										category={item.categories[0].name}
										discount={item.price.raw + Math.floor(Math.random() * 200)}
										key={item.id}
										sale={Math.random() < 0.5}
										title={item.name}
										img={item.media.source}
										price={item.price.raw}
										id={item.id}
										addToCart={handleAddToCart}
										externalStyle=""
									/>
								))}
						</div>
					)}
				</div>
				<hr />
				<div className="explore_btn_wrapper">
					<Link to="/shop">
						<button className="shop_btn btn">Load more</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ProductSection;
