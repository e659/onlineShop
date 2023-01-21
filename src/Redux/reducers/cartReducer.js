import { ActionTypes } from "../constance/actionTypes";
const INTIAL_STATE = {
  cart: [],
  cartTotal: 0,
};

const cartReducer = (state = INTIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.ADD_TO_CART: {
      // take copy from cartArr
      let newCart = [...state.cart];
      // check if product exist in arr or not
      let productIndex = newCart.findIndex(
        (product) => product.id === payload.id
      );
      if (productIndex <= -1) {
        newCart = newCart.concat({ ...payload, quantity: 1 });
      } else {
        newCart = newCart.map((product) => {
          if (product.id === payload.id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      }
      return {
        ...state,
        cart: newCart,
        cartTotal: state.cartTotal + payload.price,
      };
    }
    // removeFromCart
    case ActionTypes.REMOVE_FROM_CART: {
      let newCart = [...state.cart];
      // payload===productId(key for product)
      // search and delete product
      newCart = newCart.filter((product) => product.id !== payload);
      let newCartTotal = newCart.reduce((a, b) => a + b.price * b.quantity, 0);
      console.log(newCart);
      return {
        ...state,
        cart: newCart,
        cartTotal: newCartTotal,
      };
    }
    // increase
    case ActionTypes.INCREASE: {
      let newCart = [...state.cart].map((product)=>{
        if(product.id===payload){
          return{...product,quantity:product.quantity+1 }
        }
        else{
          return product;
        }
      })
      let newCartTotal = newCart.reduce((a, b) => a + b.price * b.quantity, 0);
      return {
        ...state,
        cart: newCart,
        cartTotal: newCartTotal,
      };
    }

    // decrese
    case ActionTypes.DECREASE:{
      let newCart=[...state.cart].map((product)=>{
        if(product.id===payload){
          return{...product,quantity:product.quantity-1}
        }
        else{
          return product;
        }
      });
      let newCartTotal = newCart.reduce((a, b) => a + b.price * b.quantity, 0);
      return{
        ...state,
        cart:newCart,
        cartTotal:newCartTotal
      }
    }
    // clearCart
    case ActionTypes.CLEARCART:{
      let newCart=[];
      return{
        ...state,
        cart:newCart,
        cartTotal:0
      }
    }
    default:
      return state;
  }
};
export default cartReducer;
