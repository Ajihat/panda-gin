import { FormatsProps } from './Formats.types';

import './Formats.sass';

export const Formats = ({ formats, activeFormat, changeActiveFormat }: FormatsProps) => {
	return (
		<div className='formats'>
			{formats.map((format) => (
				<button
					className={`formats__btn ${activeFormat === format.text ? 'formats__btn--active' : ''}`}
					key={format.id}
					onClick={() => changeActiveFormat(format.text, format.promotion)}
				>
					{format.text}
				</button>
			))}
		</div>
	);
};
