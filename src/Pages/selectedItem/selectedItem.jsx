import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../../Components/Button';
import {  addToCartAction } from '../../Redux/slices/cartSlice';
import './selectedItem.scss';

const SelectedItem = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [ addToCart, setAddToCart ] = useState(false);
  const [ product, setProduct ] = useState({});
  const [ count, setCount ] = useState(1);

  const products = useSelector(state => state.products)
  const cartItems = useSelector(state => state.cart)

  const productId = Number(params?.id)
  const productObj = products.find(ele => ele.id === productId) 

  useEffect(() => {
    const cartStatus = cartItems.some(element => element.id === productId)
    if(cartStatus) { setAddToCart(true) }
    setProduct(productObj)
  }, [productObj])


  const addItemToCart = () => {
    if(!addToCart){
      dispatch(addToCartAction({...product, count: count}))
    }
    setAddToCart(!addToCart)
  }

  const decrementCount = () => {
    if(count - 1 >= 1){
      setCount(count - 1)
    }
  }
  const incrementCount = () => {
    setCount(count + 1)
  }

  const addToCartText = addToCart ? 'Remove from Cart' : 'Add To Cart'

  return (
    <div className='selected-item-wrapper'>
        <div className='item-image-container'>
            <img className='product-image' src={product?.image} alt={product?.title}/>
        </div> 
        <div className='item-description-container'>
            <div className='item-name'>{product?.title}</div>
            <div className='item-description'>{product?.description}</div>
            <div className='item-price'><span className='currency'>$</span>{product?.price}</div>

            <div className='item-quantity'>
                <span className='quantity-wrapper'>
                  <Button
                    onClick={decrementCount}
                    className="counter decrement"
                    buttonText='-'
                  />
                  <span className='item-count'>{count}</span>
                  <Button
                    onClick={incrementCount}
                    className="counter increment"
                    buttonText='+'
                  />
                </span>
            </div>

            <div className='item-actions'>
                <Button
                    onClick={addItemToCart}
                    className="add-to-cart"
                    buttonText={addToCartText}             
                />
            </div>
        </div>
    </div>
  )
}

export default SelectedItem