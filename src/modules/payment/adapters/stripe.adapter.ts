import { Injectable } from '@nestjs/common';
import { StripeSDK } from '../external/stripe.sdk';
import { PaymentProvider } from '../payment-provider.interface';

@Injectable()
export class StripeAdapter implements PaymentProvider {
  constructor(private readonly stripe: StripeSDK) {}

  pay(amount: number) {
    return this.stripe.makePayment(amount);
  }
}
