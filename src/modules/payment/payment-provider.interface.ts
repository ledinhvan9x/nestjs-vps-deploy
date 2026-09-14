export interface PaymentProvider {
  pay(amount: number): Promise<void>;
}
