import { Injectable } from '@nestjs/common';
import { PaymentStrategy } from '../strategies/payment.strategy';

@Injectable()
export class BankStrategy implements PaymentStrategy {
  type = 'bank';

  async pay(amount: number): Promise<void> {
    console.log(`Paying ${amount} with Bank Transfer`);
  }
}
