import { PrimaryButtonProps } from './PrimaryButton.types';

import './PrimaryButton.sass';

export const PrimaryButton = ({ text, type, isDisabled, onClick }: PrimaryButtonProps) => {
	return (
		<button onClick={onClick} className='primarybutton' type={type} disabled={isDisabled}>
			<span className='primarybutton__text'>{text}</span>
			<div className='primarybutton__layer'></div>
		</button>
	);
};
