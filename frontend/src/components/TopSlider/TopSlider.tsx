import { useState, useCallback } from 'react';

import { topSlides } from 'data/topSlider/topSlider';

import { TopSlide } from 'components/TopSlide/TopSlide';
import { TopSliderNavigator } from 'components/TopSliderNavigator/TopSliderNavigator';

import { useTopSliderContext } from 'context/TopSliderContext/useTopSliderContext';
import { useInterval } from 'common/useInterval/useInterval';

import './TopSlider.sass';

export const TopSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [slidingDirection, setSlidingDirection] = useState<'forward' | 'backward'>('forward');

	const { isTopSliderClosed, isTopSliderClosedByUser } = useTopSliderContext();

	const changeSlide = useCallback(
		(direction: string) => {
			if (direction === 'nextSlide') {
				setSlidingDirection('forward');
				setCurrentSlide((prevSlide) => {
					if (prevSlide === topSlides.length - 1) {
						return 0;
					} else {
						return prevSlide + 1;
					}
				});
			}
			if (direction === 'prevSlide') {
				setSlidingDirection('backward');
				setCurrentSlide((prevSlide) => {
					if (prevSlide === 0) {
						return topSlides.length - 1;
					} else {
						return prevSlide - 1;
					}
				});
			}
		},
		[currentSlide]
	);

	const intervalRef = useInterval(() => changeSlide('nextSlide'), 4000);

	return (
		<div className={isTopSliderClosed || isTopSliderClosedByUser ? 'topslider topslider--closed' : 'topslider'}>
			<div className='topslider__inner'>
				{topSlides.map((topSlide, index) => {
					return (
						<TopSlide
							key={topSlide.id}
							{...topSlide}
							index={index}
							currentSlide={currentSlide}
							slidingDirection={slidingDirection}
							numberOfSlides={topSlides.length}
						/>
					);
				})}
				<TopSliderNavigator changeSlide={changeSlide} intervalID={intervalRef.current} />
			</div>
		</div>
	);
};
