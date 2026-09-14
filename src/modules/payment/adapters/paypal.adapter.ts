import { Injectable } from '@nestjs/common';
import { PayPalSDK } from '../external/paypal.sdk';
import { PaymentProvider } from '../payment-provider.interface';

@Injectable()
export class PayPalAdapter implements PaymentProvider {
  constructor(private readonly paypal: PayPalSDK) {}

  pay(amount: number) {
    return this.paypal.createOrder({ total: amount });
  }
}
