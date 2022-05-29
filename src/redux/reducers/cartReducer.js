let defaultState = {
    selectedItems:{items:[],restaurantname:""},
}

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":{
            let newState = {...state};
            if(action.payload.checkboxValue){
                console.log("checkboxvalue is true");
                newState.selectedItems={
                    items:[...newState.selectedItems.items,action.payload],
                    restaurantname : action.payload.restaurantName,
                };
                
            } else {
                console.log("checkboxvalue is false");
                newState.selectedItems={
                    items:[...newState.selectedItems.items.filter(item => item.title !== action.payload.title)],
                    restaurantname : action.payload.restaurantName,
                };
            }
           console.log(newState);
                return newState;
        }
        default:
            return state;
    }
};
export default cartReducer;