import {useState, useEffect, useRef} from 'react';
import {Toast} from 'bootstrap';

// TODO: find a way to make toast work without having to clear props.toastMessage, maybe pass a time in milliseconds.
export default function AppToast(props: any): JSX.Element {
	const toastRef = useRef<HTMLDivElement>(null);
	const [toast, setToast] = useState<any | null>(null);

	// Once JSX has loaded create toast.
	useEffect(() => {
		setToast(new Toast(toastRef.current as Element));
	}, []);

	// Show toast when prop message is changed.
	useEffect(() => {
		if (props.toastMessage !== '' && toast !== null) {
			toast.show();
		}
	}, [toast, props.toastMessage]);

	// Set toastMessage to empty when toast dissapear in order to show next toastMessage
	useEffect(() => {
		if (toast !== null) {
			toast._element.addEventListener('hidden.bs.toast', () => {
				props.setToastMessage('');
			});
		}
	}, [toast]);

	return (
		<>
			<div ref={toastRef} className="toast align-items-center text-white bg-primary border-0 position-absolute bottom-0 end-0 m-2" role="alert" aria-live="assertive" aria-atomic="true">
				<div className="d-flex">
					<div className="toast-body">
						{props.toastMessage}
					</div>
					<button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
				</div>
			</div>
		</>
	);
}
