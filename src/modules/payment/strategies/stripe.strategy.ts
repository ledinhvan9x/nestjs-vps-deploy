import { Injectable } from '@nestjs/common';
import { PaymentStrategy } from './payment.strategy';
import { StripeAdapter } from '../adapters/stripe.adapter';

@Injectable()
export class StripeStrategy implements PaymentStrategy {
  type = 'stripe';

  constructor(private readonly stripeAdapter: StripeAdapter) {}

  pay(amount: number) {
    return this.stripeAdapter.pay(amount);
  }
}
