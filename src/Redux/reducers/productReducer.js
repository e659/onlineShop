import { ActionTypes } from "../constance/actionTypes";
const intialState={
   products:[],

};


export const productReducer=(state=intialState,action)=>{
const {type,payload}=action;
switch (type) {
   case ActionTypes.SET_PRODUCTS:
       return {
        ...state,
       products:payload
    }
       break;

   default:return state
       break;

}
};
export const selsecProductReducer=(state={},action)=>{
   const {type,payload}=action;
   switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
          return {
           ...state,
          ...payload
       }
      default:return state
          break;
   
   }
   
   };
   export const filterProducts=(state=intialState,action)=>{
   
      const {type,payload}=action;
      switch (type) {
         case "BY_CATEGORY":
            return { ...state, category
               : action.payload };
         default:return state
             break;
      
      }
      
      };