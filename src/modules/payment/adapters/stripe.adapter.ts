export class StripeAdapter implements PaymentProvider {
  constructor(private readonly stripe: StripeSDK) {}

  pay(amount: number) {
    return this.stripe.makePayment(amount);
  }
}

