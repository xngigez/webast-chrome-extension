// TODO: Add docs
import './searchbar.scss';

import { CloseIcon, SearchIcon } from '../assests/Icons';

export default function SearchBar(): JSX.Element {
	return (
		<div className="search-bar">
			<div className="search-icon">
				<SearchIcon/>
			</div>
			<input type="text" placeholder="Search" />
			<div className="cancel-icon">
				<CloseIcon/>
			</div>
		</div>
	);
}
