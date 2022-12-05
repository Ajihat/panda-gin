import closeBtn from 'assets/close.svg';
import nextBtn from 'assets/nextBtn.svg';
import prevBtn from 'assets/prevBtn.svg';

import { useTopSliderContext } from 'context/TopSliderContext/useTopSliderContext';

import { TopSliderNavigatorProps } from './TopSliderNavigator.types';

import './TopSliderNavigator.sass';

export const TopSliderNavigator = ({ changeSlide, intervalID }: TopSliderNavigatorProps) => {
	const { closeTopSliderByUser } = useTopSliderContext();

	const handleCancel = () => {
		if (intervalID !== null) {
			clearInterval(intervalID);
		}
		closeTopSliderByUser();
	};

	const handleClick = (direction: string) => {
		changeSlide(direction);
	};

	return (
		<div className='topslidernavigator'>
			<div className='topslidernavigator__buttons'>
				<img
					onClick={() => handleClick('prevSlide')}
					src={prevBtn}
					alt='previous-button'
					className='topslidernavigator__prev'
				/>
				<img
					onClick={() => handleClick('nextSlide')}
					src={nextBtn}
					alt='next-button'
					className='topslidernavigator__next'
				/>
			</div>
			<div onClick={handleCancel} className='topslidernavigator__cancel'>
				<img src={closeBtn} alt='cancel-button' className='topslidernavigator__cancel-icon' />
			</div>
		</div>
	);
};
