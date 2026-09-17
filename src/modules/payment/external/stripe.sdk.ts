export class StripeSDK {
  async makePayment(amount: number) {
    console.log(`Stripe: paying ${amount}`);
  }
}
