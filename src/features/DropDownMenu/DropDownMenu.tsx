import { FC, ReactElement } from 'react';
import './dropdownMenu.css';

interface DropDownMenuProps {
	menuPosition: string;
	children: ReactElement;
	dropdownItemList: {
		text: string;
		icon: JSX.Element;
	}[];
}

const DropDownMenu: FC<DropDownMenuProps> = ({
	menuPosition,
	children,
	dropdownItemList,
}) => {
	return (
		<div className={`dropdown-container ${menuPosition}`}>
			{children}
			<ul className='dropdown-menu'>
				{dropdownItemList.map(dropdownItem => (
					<li className='dropdown-menu__action action' key={dropdownItem.text}>
						<span>{dropdownItem.text}</span>
						<span>{dropdownItem.icon}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default DropDownMenu;
