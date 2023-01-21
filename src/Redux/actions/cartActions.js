import { ActionTypes } from "../constance/actionTypes";
export const addToCartAction=(product)=>{
    return{
        type:ActionTypes.ADD_TO_CART,
        payload:product
    }
}
export const removeFromCartAction=(productId)=>{
    return{
        type:ActionTypes.REMOVE_FROM_CART,
        payload:productId
    }
}
export const increaseAction=(productId)=>{
    return{
        type:ActionTypes.INCREASE,
        payload:productId
    }
}
export const decreaseAction=(producId)=>{
    return{
        type:ActionTypes.DECREASE,
        payload:producId
    }
}
export const clearAllCartAction=()=>{
    return{
        type:ActionTypes.CLEARCART,
        
    }
}