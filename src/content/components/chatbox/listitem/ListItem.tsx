import './listItem.scss';

export default function ListItem({title, date}: any): JSX.Element {
	return (
		<div className="list-item">
			<div className="title">{title}</div>
			
			<div className="details">
				<div className="date">{date}</div>
				<div className="icons">
				</div>
			</div>
		</div>
	);
}
