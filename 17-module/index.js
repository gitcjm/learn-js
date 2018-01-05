/*import { MainOrder, DetailOrder } from './Orders';

var mainOrder = Object.create(MainOrder);
console.log(mainOrder.OrderNo);*/

import OrderFactory from './Orders';

var mainOrder = OrderFactory.create('main');
console.log(mainOrder.OrderNo);
var detailOrder = OrderFactory.create('detail');
console.log(detailOrder.ProdName);
