import { Injectable } from '@nestjs/common';
import { PaymentStrategy } from './payment.strategy';
import { PayPalAdapter } from '../adapters/paypal.adapter';

@Injectable()
export class PaypalStrategy implements PaymentStrategy {
  type = 'paypal';

  constructor(private readonly paypalAdapter: PayPalAdapter) {}

  async pay(amount: number) {
    return this.paypalAdapter.pay(amount);
  }
}
