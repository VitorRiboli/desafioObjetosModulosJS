import Order from './models/Order.js'
import * as orderService from './services/OrderService.js'

const data = document.getElementById("data").innerHTML.split('\n');

const order = new Order(Number(data[0]), Number(data[1]), Number(data[2]));

const total = orderService.total(order);

console.log(`Pedido código: ${order.code}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`)



