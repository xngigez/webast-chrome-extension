import './chatinput.scss';

import { SendIcon } from '../../assests/Icons';


export default function ChatInput(): JSX.Element {
	return (
		<div className="chat-input fixed-bottom-center">
			<textarea className="textarea" placeholder="Type your message..." />
			<div className="icons">
				<div className="icon"></div>
				<div className="icon"><SendIcon/></div>
			</div>
		</div>
	);
}
