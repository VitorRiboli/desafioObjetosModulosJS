export function shipment(order) {
  const valueOrder = order.basic;
  let shipping

  if(valueOrder < 100.0) {
    shipping = 20.0;
  } else if (valueOrder < 200.0) {
    shipping = 12.0;
  } else {
    shipping = 0;
  }

  return shipping;
}