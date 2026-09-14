export class PayPalSDK {
  async createOrder(data: { total: number }) {
    console.log(`PayPal: creating order ${data.total}`);
  }
}
