import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  pay(@Body() body: { type: string; amount: number }) {
    return this.paymentService.pay(body.type, body.amount);
  }
}
