import { FC } from 'react';

interface TriggerProps {
	className: string;
	handler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Trigger: FC<TriggerProps> = ({ className, handler }) => {
	return (
		<button className={className} onClick={event => handler(event)}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				fill='currentColor'
				className='bi bi-three-dots-vertical'
				viewBox='0 0 16 16'
			>
				<path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
			</svg>
		</button>
	);
};

export default Trigger;
