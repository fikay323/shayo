import { Component } from '@angular/core';

@Component({
	selector: 'app-offerings',
	imports: [],
	templateUrl: './offerings.html',
	styleUrl: './offerings.scss',
})
export class Offerings {
	activeTab = 'channels';

	tabs = [
		{ id: 'channels', label: 'Multiple Channels of Payments' },
		{ id: 'analytics', label: 'Data Analytics and Reporting' },
		{ id: 'split', label: 'Split Settlement' },
		{ id: 'instant', label: 'Instant Settlement' }
	];

	tabImages: { [key: string]: string } = {
		'channels': '/images/offering-channels.png',
		'analytics': '/images/offering-analytics.png',
		'split': '/images/offering-split.png',
		'instant': '/images/offering-instant.png'
	};

	setTab(id: string) {
		this.activeTab = id;
	}
}
