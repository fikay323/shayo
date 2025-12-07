import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
	leftFaqs: FaqItem[] = [
    { 
      question: 'What are your transaction fees?', 
      answer: 'Looking for cost-effective transaction fees? Look no further! Sling offers some of the most competitive rates in the industry, starting as low as 1.2% for every transaction. What’s even more appealing is the cap of N2,500 regardless of the transaction amount.', 
      isOpen: false 
    },
    { 
      question: 'Can I get a payment link for an unregistered business?', 
      answer: 'For sure! Getting started is a breeze. Once you create your Sling account and onboard to the platform, you can effortlessly generate your own customized payment link from the dashboard and begin receiving payments instantly. We’ve designed the link creation process to be user-friendly and flexible, allowing you to tailor your links to your specific preferences. Whether you need a single payment link or a donation link, you can do it all without requiring any technical expertise or integrations', 
      isOpen: false 
    },
    { 
      question: 'Can I start using the product before completing my KYC?', 
      answer: 'Absolutely! We’ve streamlined the process to make it hassle-free. For individual businesses, we only require essential information to get you started. Registered businesses need to provide a few mandatory documents, and you can begin accepting payments nationwide within 24 hours of submission!', 
      isOpen: false 
    }
  ];

  rightFaqs: FaqItem[] = [
    { 
      question: 'Can I create multiple business accounts with the same details?', 
      answer: 'In our commitment to preventing duplicate accounts and ensuring secure transactions, we’ve implemented restrictions on creating multiple accounts with identical details. While you can certainly create more than one account on Sling, each account must have its own unique set of information to maintain the highest standards of security and transparency.', 
      isOpen: false 
    },
    { 
      question: 'Can I get an immediate settlement?', 
      answer: 'Absolutely! We’re proud to offer our instant/same-day settlement service as one of our core offerings. Customers who opt for this service will experience the convenience of receiving hourly payments settlement. This means you’ll always have access to your funds, ensuring you’re never out of cash for restocking or making swift payments throughout the day to keep your business running smoothly. Our commitment to customer satisfaction is unwavering, and we’ve designed this service with your needs in mind.', 
      isOpen: false
    },
    { 
      question: 'How often will I get settled?', 
      answer: 'Absolutely! We’re proud to offer our instant/same-day settlement service as one of our core offerings. Customers who opt for this service will experience the convenience of receiving hourly payments settlement. This means you’ll always have access to your funds, ensuring you’re never out of cash for restocking or making swift payments throughout the day to keep your business running smoothly. Our commitment to customer satisfaction is unwavering, and we’ve designed this service with your needs in mind.', 
      isOpen: false 
    }
  ];

  toggle(list: 'left' | 'right', index: number) {
    if (list === 'left') {
      this.leftFaqs[index].isOpen = !this.leftFaqs[index].isOpen;
    } else {
      this.rightFaqs[index].isOpen = !this.rightFaqs[index].isOpen;
    }
  }
}
