// TODO: Add docs.
import {useEffect, useRef, useState} from 'react';
import './chatbox.scss';

import CloseIcon from './assests/close-md-svgrepo-com.svg';

function Chatbox() {
	const chatboxRef: React.RefObject<HTMLDivElement> = useRef(null);
	const [isDraggable, setIsDraggable] = useState<boolean>(false);
	const [chatboxPosition, setChatboxPosition] = useState<{left: number | null; top: number | null}>({left: null, top: null});
	const [chatboxOffset, setChatboxOffset] = useState<{x: number; y: number}>({x: 0, y: 0});

	useEffect(() => {
		// Set to initial loaded position by css.
		if (chatboxRef.current) {
			setChatboxPosition({
				left: chatboxRef.current.offsetLeft,
				top: chatboxRef.current.offsetTop
			});
		}

		const handleMouseMove = (e: MouseEvent) => {
			e.preventDefault();

			if (isDraggable) {
				setChatboxPosition({
					left: e.clientX - chatboxOffset.x,
					top: e.clientY - chatboxOffset.y
				});
			}
		};

		const handleMouseUp = (e: MouseEvent) => {
			e.preventDefault();

			setIsDraggable(false);
		};

		// Attach event handler to event listener.
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);

		// Detach event handler from event listener.
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseMove);
		};
	}, [chatboxRef.current, isDraggable]);

	const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault();

		if (chatboxPosition?.left !== null && chatboxPosition?.top !== null) {
			setChatboxOffset({
				x: e.clientX - chatboxPosition.left,
				y: e.clientY - chatboxPosition.top
			});
			setIsDraggable(true);
		}
	};

	return (
		<div
			className="chatbox"
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
					<div className="icon close">
						<CloseIcon/>
					</div>
				</div>
			</div>
			<div className="content"></div>
		</div>
	);
}

export default Chatbox;
