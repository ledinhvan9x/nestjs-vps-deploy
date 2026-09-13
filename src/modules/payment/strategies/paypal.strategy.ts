import { Injectable } from '@nestjs/common';
import { PaymentStrategy } from './payment.strategy';

@Injectable()
export class PaypalStrategy implements PaymentStrategy {
  type = 'paypal';

  async pay(amount: number) {
    console.log(`Pay ${amount} with PayPal`);
  }
}
