import React from 'react';
import Moment from 'react-moment';

function AllOrders({ orders }) {
  const renderList = (orders, side, className) => {
    return (
      <>
        <table className={`table table-striped mb-0 order-list ${className}`}>
          <thead>
            <tr className="table-title order-list-title">
              <th colSpan='3'>{side}</th>
            </tr>
            <tr>
              <th>amount</th>
              <th>price</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {orders && orders.map((order) => (
              <tr key={order.id}>
                <td>{order.amount - order.filled}</td>
                <td>{order.price}</td>
                <td>
                  <Moment fromNow>{parseInt(order.date) * 1000}</Moment>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }

  return (
    <div className="card">
      {console.log('orders=====', orders)}
      <h2 className="card-title">All Orders</h2>
      <div className="row">
        <div className="col-sm-6">
          {renderList(orders.buy, 'Buy', 'order-list-buy')}
        </div>
        <div className="col-sm-6">
          {renderList(orders.sell, 'Sell', 'order-list-sell')}
        </div>
      </div>
    </div>
  );
}

export default AllOrders;
