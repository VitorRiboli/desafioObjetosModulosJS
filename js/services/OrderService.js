import * as shippingService from './ShippingService.js'

export function total(order) {
  const discount = order.basic * (order.discount / 100); //Retorna o disconto total

  const total = (order.basic - discount) + shippingService.shipment(order);

  return total;
}