export class PayPalAdapter implements PaymentProvider {
  constructor(private readonly paypal: PayPalSDK) {}

  pay(amount: number) {
    return this.paypal.createOrder({ total: amount });
  }
}
