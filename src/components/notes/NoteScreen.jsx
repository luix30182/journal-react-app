import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
	return (
		<div className="notes__main-content">
			<NotesAppBar />

			<div className="notes__content">
				<input
					type="text"
					placeholder="Some awesome content"
					className="notes__input"
				/>
				<textarea
					placeholder="Luffy rey de los pirtas"
					className="notes__textarea"
				></textarea>
			</div>
			<div className="notes__image">
				<img src="https://universo-nintendo.com.mx/my_uploads/2020/05/Universo-Nintendo-One-Piece-Bartolomeo-Nico-Robin.jpg" />
			</div>
		</div>
	);
};
