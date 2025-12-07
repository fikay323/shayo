import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-methods',
  imports: [],
  templateUrl: './payment-methods.html',
  styleUrl: './payment-methods.scss',
})
export class PaymentMethods {
	paymentMethods = [
		{ 
			name: 'Pay with Card', 
			description: 'Effortless transactions, hassle-free checkout.', 
			icon: '/images/payment-card.png'
		},
		{ 
			name: 'Pay with Bank Transfer', 
			description: 'Convenient & direct banking transactions.', 
			icon: '/images/payment-bank.png'
		},
		{ 
			name: 'Pay with Link', 
			description: 'Simplified payment with a click.', 
			icon: ''
		},
		{ 
			name:'Pay with USSD', 
			description: 'Instant payments at your fingertips.', 
			icon: '/images/payment-ussd.png'
		},
		{ 
			name: 'Pay with QR Code', 
			description: 'Scan, Pay, Done - The Quick and Secure Way.', 
			icon: '/images/payment-qr.png'
		},
		{ 
			name: 'Pay with Phone', 
			description: 'Seamless payments via phone numbers.', 
			icon: '/images/payment-phone.png'
		}
	];
}
