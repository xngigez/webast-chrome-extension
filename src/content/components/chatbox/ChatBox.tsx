// TODO: Add docs.
import {useEffect, useRef, useState} from 'react';
import './styles/chatbox.scss';

import {CloseIcon, ChatIcon, MenuIcon, AddIcon} from './assests/Icons';

import SearchBar from './searchbox/SearchBar';
import ListItem from './listitem/ListItem';
import Button from './components/buttons/Button';
import ChatInput from './components/chatinput/ChatInput';

function Chatbox() {
	const chatboxRef: React.RefObject<HTMLDivElement> = useRef(null);
	const [chatboxPosition, setChatboxPosition] = useState<{left: number | null; top: number | null}>({left: null, top: null});
	const [chatboxOffset, setChatboxOffset] = useState<{x: number; y: number}>({x: 0, y: 0});

	const [isChatboxDraggable, setIsChatboxDraggable] = useState<boolean>(false);
	const [isChatboxMinimized, setIsChatboxMinimized] = useState<boolean>(false);

	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	useEffect(() => {
		// Set to initial loaded position by css.
		if (chatboxRef.current) {
			setChatboxPosition({
				left: chatboxRef.current.offsetLeft,
				top: chatboxRef.current.offsetTop
			});
		}

		const handleMouseMove = (e: MouseEvent) => {
			if (isChatboxDraggable) {
				setChatboxPosition({
					left: e.clientX - chatboxOffset.x,
					top: e.clientY - chatboxOffset.y
				});
			}
		};

		const handleMouseUp = (e: MouseEvent) => {
			setIsChatboxDraggable(false);
		};

		// Attach event handler to event listener.
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);

		// Detach event handler from event listener.
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseMove);
		};
	}, [chatboxRef.current, isChatboxDraggable]);

	const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault();

		if (chatboxPosition?.left !== null && chatboxPosition?.top !== null) {
			setChatboxOffset({
				x: e.clientX - chatboxPosition.left,
				y: e.clientY - chatboxPosition.top
			});
			setIsChatboxDraggable(true);
		}
	};

	/*
	 * Maximize and minimize
	 */
	useEffect(() => {
		if (isChatboxMinimized) {
			setChatboxPosition({
				left: null,
				top: null
			});
		} else {
			if (chatboxRef.current) {
				setChatboxPosition({
					left: chatboxRef.current.offsetLeft,
					top: chatboxRef.current.offsetTop
				});
			}
		}
	}, [isChatboxMinimized]);

	return (
		<div
			className={`chatbox${isChatboxMinimized ? ' minimized' : ''}`}
			style={
				chatboxPosition.left != null && chatboxPosition.left != null ?
					{left: `${chatboxPosition.left}px`, top: `${chatboxPosition.top}px`} : {}
			}
			ref={chatboxRef}>

			<div
				className="title-bar"
				onMouseDown={onMouseDown}>

				<div className="handle">
					<div className="handle-bar"></div>
				</div>

				<div className="icons">
					<div className="icon minimize"></div>

					<div className="icon maximize"></div>

					<div
						className="icon close"
						onClick={() => {setIsChatboxMinimized(!isChatboxMinimized);}}>
						<CloseIcon />
					</div>
				</div>
			</div>

			<div className="app-bar">
				<div className="menu-action"
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<MenuIcon />
				</div>

				<div className='app-bar-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

				<div className='app-bar-tokens'>50k Tokens</div>

				<div className="actions">
					<div
						className="icon">
						<AddIcon />
					</div>
				</div>
			</div>

			<div className="content">
				<div className={`menu-box ${isMenuOpen ? 'menu-box-show':''}`}>
					<SearchBar/>

					<ListItem title='example title' date='12 may'/>

					<Button text='New conversation' icon={<AddIcon/>}/>
				</div>
				Content here.

				<ChatInput/>
			</div>

			<div
				className="minimized-chatbox-icon"
				onClick={() => {setIsChatboxMinimized(!isChatboxMinimized);}}>
				<ChatIcon />
			</div>
		</div>
	);
}

export default Chatbox;
