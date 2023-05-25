// TODO: add docs
import './chatinput.scss';
import {SendIcon} from '../../assests/Icons';
import React, {useState} from 'react';


type ChatInput = {
	onSend: (message: string) => string;
}


export default function ChatInput({onSend}: ChatInput): JSX.Element {
	const [messsage, setMessage] = useState<string>('hi');


	return (
		<div className="chat-input fixed-bottom-center">
			<textarea
				onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void => setMessage(event.target.value)}
				value={messsage}
				className="textarea" placeholder="Type your message..." />

			<div className="icons">
				<div className="icon"></div>

				<div onClick={() => onSend(messsage)} className="icon">
					<SendIcon />
				</div>
			</div>
		</div>
	);
}
