import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [{
  '_id': '637710382d84106b16154d51',
  'table': '3',
  'status': 'IN_PRODUCTION',
  'products': [
    {
      'product': {
        'name': 'Coca cola',
        'imagePath': '1668745219117-coca-cola.png',
        'price': 7,
      },
      'quantity': 1,
      '_id': '637710382d84106b16154d52'
    }
  ],
}];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👩🏽‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="👌🏽"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
