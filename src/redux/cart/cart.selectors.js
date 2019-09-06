import { createSelector } from 'reselect';


// input selector: selectors that returns a piec of the state
const selectCart = state => state.cart;

// output selector
export const selectCartItems  = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
  )
)