import {CopyIcon} from '../../assests/Icons';
import './ChatBubbleResponse.scss';


export default function ChatBubbleResponse({message: message}: any): JSX.Element {
	return <div className='chat-bubble-response'>
		{message.content}

		<div className='icon'>
			<CopyIcon/>
		</div>
	</div>;
}