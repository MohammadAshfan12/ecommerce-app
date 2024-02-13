import { useSelector } from 'react-redux'

export const CheckItemStatus = (productId) => {
    const wishListItem = useSelector(state => state.wishList);
    const cartItems = useSelector(state => state.cart);

    let status = {
        wishList: false,
        cart: false
    }
    const wishLisstStatus = wishListItem.some(element => element.id === productId);
    const cartStatus = cartItems.some(element => element.id === productId);
    if(wishLisstStatus){ status.wishList = true }
    if(cartStatus) { status.cart = true }

    return status
}