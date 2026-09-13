import {
  BadRequestException,
  Inject,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';
import { PaymentStrategy } from './strategies/payment.strategy';

@Injectable()
export class PaymentService implements OnModuleInit {
  private strategies = new Map<string, PaymentStrategy>();

  constructor(
    @Inject('PAYMENT_STRATEGIES')
    private readonly strategyList: PaymentStrategy[],
  ) {}

  onModuleInit() {
    for (const strategy of this.strategyList) {
      this.strategies.set(strategy.type, strategy);
    }
  }

  pay(type: string, amount: number) {
    const strategy = this.strategies.get(type);

    if (!strategy) {
      throw new BadRequestException('Unsupported payment type');
    }

    return strategy.pay(amount);
  }
}
