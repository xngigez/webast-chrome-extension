/**
 * @module Button
 * @description A reusable button component.
 */

import './button.scss';

/**
 * @typedef {Object} ButtonProps
 * @property {string} text - The text to be displayed on the button.
 * @property {React.ReactNode} [icon] - The optional icon element to be displayed alongside the text.
 * @property {() => void} [onClick] - The optional callback function to be called when the button is clicked.
 */
type ButtonProps = {
	text: string;
	icon?: React.ReactNode;
	onClick?: () => void;
}

/**
 * Button component.
 *
 * @param {ButtonProps} props - The props object containing text, icon, and onClick.
 * @returns {JSX.Element} The rendered Button component.
 */
export default function Button({text, icon, onClick}: ButtonProps): JSX.Element {
	return (
		<button className="button fixed-bottom-center" onClick={onClick}>
			{icon && <span className="button-icon">{icon}</span>}
			<span className="button-text">{text}</span>
		</button>
	);
}
