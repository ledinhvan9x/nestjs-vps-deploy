import { Injectable } from '@nestjs/common';
import { PaymentStrategy } from './payment.strategy';

@Injectable()
export class PaypalStrategy implements PaymentStrategy {
  type = 'paypal';

   constructor(
    private readonly paypalAdapter: PaypalAdapter,
  ) {}

  async pay(amount: number) {
    return this.paypalAdapter.pay(amount);
  }
}
