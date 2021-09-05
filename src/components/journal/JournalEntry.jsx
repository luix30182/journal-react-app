import React from 'react';

export const JournalEntry = () => {
	return (
		<div className="journal__entry pointer">
			<div
				className="journal__entry-picture"
				style={{
					backgroundImage:
						'url("https://depor.com/resizer/eXyg72ibi7PubQ5ORe1d91e4R4A=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/J4BEFQKV4FARVD2SIQCSK2OEIY.jpg")',
				}}
			></div>
			<div className="journal__entry-body">
				<p className="journal__entry-title">Un nuevo mundo</p>
				<p className="journal__entry-content">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
					facilis consectetur maiores dolores quibusdam quae fuga quisquam quo
					unde ut mollitia eius, accusantium architecto recusandae! Itaque quis
					quidem cum molestias.
				</p>
			</div>
			<div className="journal__entry-date-box">
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};
