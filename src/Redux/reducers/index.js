// if ihave more one reducer
import { combineReducers } from "redux";
import { productReducer, selsecProductReducer, filterProducts } from "./productReducer";
import cartReducer from "./cartReducer";
// all My Reducers
const reducers=combineReducers({
    allProducts:productReducer,
    product: selsecProductReducer,
    cart:cartReducer,
    filters:filterProducts
});
export default reducers;