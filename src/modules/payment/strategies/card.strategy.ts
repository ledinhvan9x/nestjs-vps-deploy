import { Injectable } from '@nestjs/common';
import { PaymentStrategy } from '../strategies/payment.strategy';

@Injectable()
export class CardStrategy implements PaymentStrategy {
  type = 'card';

  async pay(amount: number): Promise<void> {
    console.log(`Paying ${amount} with Card`);
  }
}
