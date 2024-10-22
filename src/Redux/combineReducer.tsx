import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import addressReducer from "./addressReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    wishlist: wishlistReducer,
    address: addressReducer,
})

export default rootReducer;