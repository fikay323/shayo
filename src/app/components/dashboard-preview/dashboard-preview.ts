import { Component } from '@angular/core';

@Component({
	selector: 'app-dashboard-preview',
	imports: [],
	templateUrl: './dashboard-preview.html',
	styleUrl: './dashboard-preview.scss',
})
export class DashboardPreview {
	readonly partners = [
		'/images/partners/interswitch.png',
		'/images/partners/Coralpay.png',
		'/images/partners/uba.png',
		'/images/partners/pay-attitude.png',
		'/images/partners/wema.png',
		'/images/partners/providus.png'
	];
}
