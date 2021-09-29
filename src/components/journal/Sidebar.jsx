import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogOut } from '../../actions/auth';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
	const { name } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const handleLogOut = () => {
		dispatch(startLogOut());
	};
	return (
		<aside className="journal__sidebar">
			<div className="journal__sidebar-navbar">
				<h3 className="mt-5">
					<i className="far fa-moon"></i> <span>{name}</span>
				</h3>
				<button className="btn" onClick={handleLogOut}>
					Logout
				</button>
			</div>

			<div className="journal__new-entry">
				<i className="far fa-calendar-plus fa-5x"></i>
				<p className="mt-5">New entry</p>
			</div>

			<JournalEntries />
		</aside>
	);
};
