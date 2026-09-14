import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { PaypalStrategy } from './strategies/paypal.strategy';
import { PayPalAdapter } from './adapters/paypal.adapter';
import { PayPalSDK } from './external/paypal.sdk';
import { StripeAdapter } from './adapters/stripe.adapter';
import { StripeSDK } from './external/stripe.sdk';
import { StripeStrategy } from './strategies/stripe.strategy';

@Module({
  controllers: [PaymentController],
  providers: [
    PaymentService,
    PaypalStrategy,
    PayPalAdapter,
    PayPalSDK,
    StripeStrategy,
    StripeAdapter,
    StripeSDK,
    {
      provide: 'PAYMENT_STRATEGIES',
      inject: [StripeStrategy, PaypalStrategy],
      useFactory: (stripe: StripeStrategy, paypal: PaypalStrategy) => [
        stripe,
        paypal,
      ],
    },
  ],
})
export class PaymentModule {}
