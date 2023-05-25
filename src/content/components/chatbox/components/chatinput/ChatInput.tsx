import './ChatInput.scss';
import {SendIcon} from '../../assests/Icons';
import React, {useState} from 'react';

/**
 * Props for the ChatInput component.
 */
type ChatInputProps = {
	sendMessage: (message: message) => void;
}

/**
 * ChatInput component.
 * @param {ChatInputProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
export default function ChatInput({sendMessage}: ChatInputProps): JSX.Element {
	const [inputMessage, setInputMessage] = useState<string>('');

	/**
	 * Event handler for input change.
	 * @param {React.ChangeEvent<HTMLTextAreaElement>} event - The change event.
	 */
	const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputMessage(event.target.value);
	};

	/**
	 * Event handler for sending a message.
	 */
	const handleSendMessage = () => {
		sendMessage({role: 'user', content: inputMessage});
	};

	return (
		<div className="chat-input fixed-bottom-center">
			<textarea
				onChange={handleInputChange}
				value={inputMessage}
				className="textarea" placeholder="Type your message..."
			/>

			<div className="icons">
				<div className="icon"></div>

				<div onClick={handleSendMessage} className="icon">
					<SendIcon />
				</div>
			</div>
		</div>
	);
}
