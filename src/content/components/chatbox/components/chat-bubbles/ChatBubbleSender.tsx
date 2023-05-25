import {CopyIcon} from '../../assests/Icons';
import './ChatBubbleSender.scss';


export default function ChatBubbleSender({message: message}: any): JSX.Element {
	return <div className='chat-bubble-sender'>
		{message.content}

		<div className='icon'>
			<CopyIcon/>
		</div>
	</div>;
}