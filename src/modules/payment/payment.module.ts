import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { PaypalStrategy } from './strategies/paypal.strategy';

import { CardStrategy } from './strategies/card.strategy';
import { BankStrategy } from './strategies/bank.strategy';
import { PayPalAdapter } from './adapters/paypal.adapter';

@Module({
  controllers: [PaymentController],
  providers: [
    PaymentService,
    PaypalStrategy,
    PayPalAdapter,
    PayPalAdapter,
    CardStrategy,
    BankStrategy,
    {
      provide: 'PAYMENT_STRATEGIES',
      inject: [CardStrategy, PaypalStrategy, BankStrategy],
      useFactory: (
        card: CardStrategy,
        paypal: PaypalStrategy,
        bank: BankStrategy,
      ) => [card, paypal, bank],
    },
  ],
})
export class PaymentModule {}
