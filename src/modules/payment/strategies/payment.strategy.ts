export interface PaymentStrategy {
  type: string;
  pay(amount: number): Promise<void>;
}
