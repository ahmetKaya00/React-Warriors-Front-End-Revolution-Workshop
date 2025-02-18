import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Button, Container, Table } from 'reactstrap';

function CartPage(){
  const {cart,removeFromCart,clearCart} = useContext(CartContext);

  const totalPrice = cart.reduce((acc,product) => acc + product.price,0).toFixed(2);

  return(
    <Container>
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
        <>
        <Table striped>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.title} style={{width:'100px', height: 'auto'}}/>
                </td>
                <td>{product.title}</td>
                <td>{product.price.toFixed(2)}</td>
                <td>
                  <Button color='danger' onClick={()=>removeFromCart(product.id)}>Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className='d-flex justify-content-between align-items-center'>

        <h4>Total: ${totalPrice}</h4>
        <Button color='danger' onClick={clearCart}>Clear Cart</Button>
        </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </Container>
  );
}
export default CartPage;