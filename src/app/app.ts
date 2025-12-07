import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Stats } from './components/stats/stats';
import { About } from './components/about/about';
import { Offerings } from './components/offerings/offerings';
import { PaymentMethods } from './components/payment-methods/payment-methods';
import { DashboardPreview } from './components/dashboard-preview/dashboard-preview';
import { Faq } from './components/faq/faq';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    Navbar,
    Hero,
    Stats,
    About,
    Offerings,
    PaymentMethods,
    DashboardPreview,
    Faq,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sling-pay');
}